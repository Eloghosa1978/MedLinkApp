import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import { UserModel } from "../src/models/authModel";
import { DoctorModel } from "../src/models/doctorModel";
import { HospitalModel } from "../src/models/hospitalModel";
import { SPECIALIZATIONS } from "../src/constants/specializations";
import doctors from "./doctors";
import hospitals from "./hospitals";

import { connectDB } from "../src/config/database";

dotenv.config({
  path: path.resolve(__dirname, "../src/.env"),
});

const seed = async () => {
  try {
    // 1. Connect to MongoDB
    await connectDB();

    console.log("Connected to MongoDB");

    // --------------------------------------------------
    // 2. Remove previous seeded doctors
    // --------------------------------------------------

    const seedLicenseNumbers = doctors.map(
      (doctor) => doctor.doctor.licenseNumber,
    );

    await DoctorModel.deleteMany({
      licenseNumber: { $in: seedLicenseNumbers },
    });

    console.log("Previous seeded doctors removed");

    // --------------------------------------------------
    // 3. Remove previous seeded users
    // --------------------------------------------------

    const seedEmails = doctors.map((doctor) => doctor.user.email);

    await UserModel.deleteMany({
      email: { $in: seedEmails },
    });

    console.log("Previous seeded users removed");

    // --------------------------------------------------
    // 4. Seed hospitals
    // --------------------------------------------------

    await HospitalModel.deleteMany({
      name: { $in: hospitals.map((hospital) => hospital.name) },
    });

    console.log("Previous seeded hospitals removed");

    const createdHospitals = await HospitalModel.insertMany(hospitals);

    console.log(`Seeded ${createdHospitals.length} hospitals`);

    // Create an easy lookup:
    //
    // "Rivers State University Teaching Hospital"
    //        ↓
    // ObjectId(...)
    //

    const hospitalMap = new Map(
      createdHospitals.map((hospital) => [hospital.name, hospital._id]),
    );

    // --------------------------------------------------
    // 5. Seed users + doctors
    // --------------------------------------------------

    for (const doctorData of doctors) {
      // -----------------------------------------------
      // Create User
      // -----------------------------------------------

      const user = await UserModel.create(doctorData.user);

      // -----------------------------------------------
      // Common doctor fields
      // -----------------------------------------------

      const doctorPayload = {
        ...doctorData.doctor,
        specializations: doctorData.doctor
          .specializations as (typeof SPECIALIZATIONS)[number][],
        primarySpecialization: doctorData.doctor
          .primarySpecialization as (typeof SPECIALIZATIONS)[number],
        userId: user._id,
      };

      // -----------------------------------------------
      // Remove seed-only hospitalName
      // -----------------------------------------------

      const hospitalName = doctorData.doctor.hospitalName;

      delete (doctorPayload as any).hospitalName;

      // -----------------------------------------------
      // Hospital doctor
      // -----------------------------------------------

      if (doctorData.doctor.practiceType === "hospital") {
        if (!hospitalName) {
          throw new Error(
            `Hospital doctor ${user.firstName} ${user.lastName} does not have a hospitalName`,
          );
        }

        const hospitalId = hospitalMap.get(hospitalName);

        if (!hospitalId) {
          throw new Error(
            `Hospital "${hospitalName}" was not found for ${user.firstName} ${user.lastName}`,
          );
        }

        doctorPayload.hospitalId = String(hospitalId);

        doctorPayload.practiceLocation = undefined;
      }

      // -----------------------------------------------
      // Private doctor
      // -----------------------------------------------

      if (doctorData.doctor.practiceType === "private") {
        doctorPayload.hospitalId = undefined;

        if (!doctorData.doctor.practiceLocation) {
          throw new Error(
            `Private doctor ${user.firstName} ${user.lastName} does not have a practiceLocation`,
          );
        }
      }

      // -----------------------------------------------
      // Doctor who does BOTH
      // -----------------------------------------------

      if (doctorData.doctor.practiceType === "both") {
        if (!hospitalName) {
          throw new Error(
            `Doctor ${user.firstName} ${user.lastName} has practiceType "both" but no hospitalName`,
          );
        }

        if (!doctorData.doctor.practiceLocation) {
          throw new Error(
            `Doctor ${user.firstName} ${user.lastName} has practiceType "both" but no practiceLocation`,
          );
        }

        const hospitalId = hospitalMap.get(hospitalName);

        if (!hospitalId) {
          throw new Error(
            `Hospital "${hospitalName}" was not found for ${user.firstName} ${user.lastName}`,
          );
        }

        doctorPayload.hospitalId = String(hospitalId);
      }

      // -----------------------------------------------
      // Create Doctor
      // -----------------------------------------------

      const doctor = await DoctorModel.create(doctorPayload);

      console.log(
        `Seeded doctor: ${user.firstName} ${user.lastName} (${doctor.practiceType})`,
      );
    }

    console.log("✅ Seeding completed successfully");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await mongoose.disconnect();

    console.log("Disconnected from MongoDB");
  }
};

seed();
