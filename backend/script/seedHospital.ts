import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserModel } from "../src/models/authModel";
import { DoctorModel } from "../src/models/doctorModel";
import doctors from "./doctors";
import path from "path";
import { connectDB } from "../src/config/database";
dotenv.config({ path: path.resolve(__dirname, "../src/.env") });

const seed = async () => {
  try {
    // 1. Connect to MongoDB
    connectDB();

    console.log("Connected to MongoDB");

    for (const doctorData of doctors) {
      // Check Existing User
      const existingUser = await UserModel.findOne({
        email: doctorData.user.email,
      });
      if (existingUser) {
        console.log(
          `User with email ${doctorData.user.email} already exists. Skipping...`,
        );
        continue;
      }
      // Create User
      const user = new UserModel(doctorData.user);
      await user.save();

      // Create Doctor
      const doctor = new DoctorModel({
        ...doctorData.doctor,
        userId: user._id,
      });
      await doctor.save();
      console.log(`Seeded doctor: ${user.firstName} ${user.lastName}`);
    }
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    // 4. Always disconnect
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

seed();
