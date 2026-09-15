import { Request, Response } from "express";
import { discoverDoctors, getDoctorDetails } from "./doctor.service";
import { DiscoveryParams } from "../types/doctors.types";

const doctorDiscoveryController = async (req: Request, res: Response) => {
  try {
    const params = req.query;

    const result = await discoverDoctors(params as DiscoveryParams);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error("Discover doctors error: ", error);
    res.status(500).json({
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal Server Error",
    });
  }
};

const doctorDetailsController = async (req: Request, res: Response) => {
  try {
    const { doctorId } = req.params;

    const doctor = await getDoctorDetails(doctorId as string);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        code: "DOCTOR_NOT_FOUND",
        message: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      code: "DOCTOR_FOUND",
      data: doctor,
    });
  } catch (error) {
    console.error("Get doctor by ID error: ", error);

    res.status(500).json({
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal Server Error",
    });
  }
};

export { doctorDiscoveryController, doctorDetailsController };
