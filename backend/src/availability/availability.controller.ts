import { Request, Response, NextFunction } from "express";
import {
  createAvailability,
  getAvailabilityById,
  getMyAvailability,
  getDoctorAvailability,
  updateAvailability,
  deleteAvailability,
} from "./availability.service";

export const createAvailabilityController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.dbUser?._id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        code: "MISSING_USER_ID",
        message: "User ID is missing in the request",
      });
    }
    const availability = await createAvailability(userId.toString(), req.body);

    return res.status(201).json({
      success: true,
      message: "Availability created successfully",
      data: availability,
    });
  } catch (error) {
    return next(error);
  }
};

export const getMyAvailabilityController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.dbUser?._id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        code: "MISSING_USER_ID",
        message: "User ID is missing in the request",
      });
    }
    const availability = await getMyAvailability(userId.toString());
    return res.status(200).json({
      success: true,
      message: "My availability retrieved successfully",
      data: availability,
    });
  } catch (error) {
    return next(error);
  }
};

export const getDoctorAvailabilityController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const doctorId = Array.isArray(req.params.doctorId)
      ? req.params.doctorId[0]
      : req.params.doctorId;

    const availability = await getDoctorAvailability(doctorId);
    return res.status(200).json({
      success: true,
      message: "Doctor's availability retrieved successfully",
      data: availability,
    });
  } catch (error) {
    return next(error);
  }
};

export const getAvailabilityByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.dbUser?._id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        code: "MISSING_USER_ID",
        message: "User ID is missing in the request",
      });
    }
    const availabilityId = Array.isArray(req.params.availabilityId)
      ? req.params.availabilityId[0]
      : req.params.availabilityId;

    const availability = await getAvailabilityById(
      userId.toString(),
      availabilityId,
    );
    return res.status(200).json({
      success: true,
      message: "Availability retrieved successfully",
      data: availability,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateAvailabilityController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.dbUser?._id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        code: "MISSING_USER_ID",
        message: "User ID is missing in the request",
      });
    }
    const availabilityId = Array.isArray(req.params.availabilityId)
      ? req.params.availabilityId[0]
      : req.params.availabilityId;
    const updatedAvailability = await updateAvailability(
      userId.toString(),
      availabilityId,
      req.body,
    );
    return res.status(200).json({
      success: true,
      message: "Availability updated successfully",
      data: updatedAvailability,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteAvailabilityController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.dbUser?._id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        code: "MISSING_USER_ID",
        message: "User ID is missing in the request",
      });
    }

    const availabilityId = Array.isArray(req.params.availabilityId)
      ? req.params.availabilityId[0]
      : req.params.availabilityId;

    await deleteAvailability(userId.toString(), availabilityId);

    return res.status(200).json({
      success: true,
      message: "Availability deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
};
