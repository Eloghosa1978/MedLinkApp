import { body, param } from "express-validator";

export const createAvailabilityValidator = [
  body("date")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Date must be valid ISO 8601 date"),

  body("startTime")
    .notEmpty()
    .withMessage("Start time is required")
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Start time must be in HH:mm format"),
  body("endTime")
    .notEmpty()
    .withMessage("End time is required")
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("End time must be in HH:mm format"),
];

export const updateAvailabilityValidator = [
  param("availabilityId")
    .notEmpty()
    .withMessage("Availability ID is required")
    .isMongoId()
    .withMessage("Availability ID must be a valid MongoDB ObjectId"),
  body("date")
    .optional()
    .isISO8601()
    .withMessage("Date must be valid ISO 8601 date"),
  body("startTime")
    .optional()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Start time must be in HH:mm format"),
  body("endTime")
    .optional()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("End time must be in HH:mm format"),
  body("status")
    .optional()
    .isIn(["available", "unavailable"])
    .withMessage("Status must be either 'available' or 'unavailable'"),
];
export const deleteAvailabilityValidator = [
  param("availabilityId")
    .notEmpty()
    .withMessage("Availability ID is required")
    .isMongoId()
    .withMessage("Availability ID must be a valid MongoDB ObjectId"),
];

export const getAvailabilityByIdValidator = [
  param("availabilityId")
    .notEmpty()
    .withMessage("Availability ID is required")
    .isMongoId()
    .withMessage("Availability ID must be a valid MongoDB ObjectId"),
];

export const getDoctorAvailabilityValidator = [
  param("doctorId")
    .notEmpty()
    .withMessage("Doctor ID is required")
    .isMongoId()
    .withMessage("Doctor ID must be a valid MongoDB ObjectId"),

  
];
