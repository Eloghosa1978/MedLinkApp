import mongoose from "mongoose";
import { AvailabilityModel } from "../models/availability.model";

import { DoctorModel } from "../models/doctorModel";
import {
  overlappingAvailability,
  timeToMinutes,
} from "../utils/availability.utils";
import { AppError } from "../utils/AppError";

export const createAvailability = async (
  userId: string,
  data: {
    date: Date;
    startTime: string;
    endTime: string;
  },
) => {
  const doctor = await DoctorModel.findOne({ userId });

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  const start = timeToMinutes(data.startTime);
  const end = timeToMinutes(data.endTime);

  if (start >= end) {
    throw new AppError("Start time must be before end time", 400);
  }

  const existingAvailability = await overlappingAvailability(
    data.startTime,
    data.endTime,
    AvailabilityModel,
    data.date,
    undefined,
    doctor._id,
  );

  if (existingAvailability) {
    throw new AppError("Availability overlaps with existing availability", 409);
  }

  const availability = new AvailabilityModel({
    doctorId: doctor._id,
    date: data.date,
    startTime: data.startTime,
    endTime: data.endTime,
  });
  return await availability.save();
};

export const getMyAvailability = async (userId: string) => {
  const doctor = await DoctorModel.findOne({ userId });

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  const availability = await AvailabilityModel.find({ doctorId: doctor._id })
    .sort({ date: 1, startTime: 1 })
    .lean()
    .exec();
  return availability;
};

export const getAvailabilityById = async (
  userId: string,
  availabilityId: string,
) => {
  const doctor = await DoctorModel.findOne({ userId });

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  const availability = await AvailabilityModel.findById(availabilityId)
    .lean()
    .exec();

  if (!availability) {
    throw new AppError("Availability not found", 404);
  }

  if (availability.doctorId.toString() !== doctor._id.toString()) {
    throw new AppError("Availability does not belong to the specified doctor", 403);
  }

  return availability;
};

export const getDoctorAvailability = async (doctorId: string) => {
  const doctor = await DoctorModel.findById(doctorId);

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  const availability = await AvailabilityModel.find({ doctorId: doctor._id })
    .sort({ date: 1, startTime: 1 })
    .lean()
    .exec();

  if (!availability || availability.length === 0) {
    throw new AppError("No availability found for the specified doctor", 404);
  }
  return availability;
};

export const updateAvailability = async (
  userId: string,
  availabilityId: string,
  data: {
    date?: Date;
    startTime?: string;
    endTime?: string;
    status?: "available" | "unavailable";
  },
) => {
  const doctor = await DoctorModel.findOne({ userId });

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  const availability = await AvailabilityModel.findOne({
    _id: availabilityId,
    doctorId: doctor._id,
  });

  if (!availability) {
    throw new AppError("Availability not found", 404);
  }
  // Rejecting modification of already booked slot

  if (availability.status === "booked") {
    throw new AppError("Booked availability cannot be modified", 400);
  }

  const newDate = data.date ?? availability.date;
  const newStartTime = data.startTime ?? availability.startTime;
  const newEndTime = data.endTime ?? availability.endTime;

  const start = timeToMinutes(newStartTime);
  const end = timeToMinutes(newEndTime);

  if (start >= end) {
    throw new AppError("Start time must be before the end time", 400);
  }

  const overlappedvailability = await overlappingAvailability(
    newStartTime,
    newEndTime,
    AvailabilityModel,
    newDate,
    availability._id,
    doctor._id,
  );
  if (overlappedvailability) {
    throw new AppError("Availability overlaps with an existing slot", 409);
  }

  availability.date = newDate;
  availability.startTime = newStartTime;
  availability.endTime = newEndTime;

  if (data.status !== undefined) {
    availability.status = data.status;
  }

  await availability.save();

  return availability;
};

export const deleteAvailability = async (
  userId: string,
  availabilityId: string,
) => {
  const doctor = await DoctorModel.findOne({
    userId,
  });

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  const availability = await AvailabilityModel.findOne({
    _id: availabilityId,
    doctorId: doctor._id,
  });

  if (!availability) {
    throw new AppError("Availability does not exist", 404);
  }

  if (availability.status === "booked") {
    throw new AppError("Booked availability cannot be deleted", 409);
  }
  await availability.deleteOne();

  return availability;
};
