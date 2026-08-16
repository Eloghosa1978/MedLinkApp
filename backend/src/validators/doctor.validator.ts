import { body, param, query } from "express-validator";
import mongoose from "mongoose";
import { SPECIALIZATIONS } from "../constants/specializations";

// Step 1: Basic professional information validation
export const doctorStep1Validator = [
  body("licenseNumber")
    .trim()
    .notEmpty()
    .withMessage("License number is required")
    .isString()
    .withMessage("License number must be a string"),

  body("licensedSince")
    .notEmpty()
    .withMessage("Licensed since date is required")
    .isDate()
    .withMessage("Licensed since must be a valid date"),

  body("practiceType")
    .notEmpty()
    .withMessage("Practice type is required")
    .isIn(["hospital", "private", "both"])
    .withMessage("Practice type must be one of: hospital, private, or both"),
];

// Step 2: Specialization and experience validation
export const doctorStep2Validator = [
  body("primarySpecialization")
    .trim()
    .notEmpty()
    .withMessage("Primary specialization is required")

    .isIn(SPECIALIZATIONS)
    .withMessage(
      `Primary specialization must be one of: ${SPECIALIZATIONS.join(", ")}`,
    ),

  body("specializations")
    .notEmpty()
    .withMessage("Specializations are required")
    .isArray({ min: 1 })
    .withMessage("Specializations must be an array with at least one item"),

  body("specializations.*")
    .isIn(SPECIALIZATIONS)
    .withMessage(
      `Each specialization must be one of: ${SPECIALIZATIONS.join(", ")}`,
    ),

  body("qualifications")
    .optional()
    .isArray()
    .withMessage("Qualifications must be an array"),

  body("qualifications.*")
    .isString()
    .withMessage("Each qualification must be a string"),

  body("biography")
    .optional()
    .isString()
    .withMessage("Biography must be a string")
    .isLength({ max: 1000 })
    .withMessage("Biography must not exceed 1000 characters"),

  body("specialistSince")
    .optional()
    .isDate()
    .withMessage("Specialist since must be a valid date"),
];

// Step 3: Practice location and hospital (conditional based on practiceType)
export const doctorStep3Validator = [
  // Validate practiceLocation object structure
  body("practiceLocation")
    .optional()
    .isObject()
    .withMessage("Practice location must be an object"),

  body("practiceLocation.street")
    .optional()
    .isString()
    .withMessage("Street must be a string"),

  body("practiceLocation.city")
    .optional()
    .isString()
    .withMessage("City must be a string"),

  body("practiceLocation.state")
    .optional()
    .isString()
    .withMessage("State must be a string"),

  body("practiceLocation.country")
    .optional()
    .isString()
    .withMessage("Country must be a string"),

  body("hospitalId")
    .optional()
    .isString()
    .withMessage("Hospital ID must be a string"),

  // Custom validation: Check practiceType-dependent fields
  body().custom((value, { req }) => {
    const practiceType = req.body.practiceType;
    const hospitalId = req.body.hospitalId;
    const practiceLocation = req.body.practiceLocation;

    // If private practice: needs location, no hospital
    if (practiceType === "private") {
      if (!practiceLocation || !practiceLocation.city) {
        throw new Error(
          "Private practice requires practice location with at least a city",
        );
      }
      if (hospitalId) {
        throw new Error(
          "Private practice doctors cannot have a hospital ID assigned",
        );
      }
    }

    // If hospital or both: needs hospital ID
    if (practiceType === "hospital" || practiceType === "both") {
      if (!hospitalId) {
        throw new Error(
          `Practice type "${practiceType}" requires a hospital ID`,
        );
      }
    }

    return true;
  }),
];

// Step 4: Consultation modes validation
export const doctorStep4Validator = [
  body("consultationModes")
    .notEmpty()
    .withMessage("Consultation modes are required")
    .isArray({ min: 1 })
    .withMessage("Consultation modes must be an array with at least one item"),
  body("consultationModes.*")
    .isIn(["physical", "virtual"])
    .withMessage(`Each consultation mode must be one of: physical, virtual`),
];

// Doctor Discovery Validators
export const doctorDiscoveryValidator = [
  query("search")
    .optional()
    .isString()
    .withMessage("Search must be a string")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Search must be between 1 and 100 characters"),
  query("specialization")
    .optional()
    .isString()
    .withMessage("Specialization must be a string")
    .custom((value) => {
      const items = value.split(", ").map((item: string) => item.trim());
      const invalid = items.filter(
        (item: string) =>
          !SPECIALIZATIONS.includes(item as (typeof SPECIALIZATIONS)[number]),
      );
      if (invalid.length > 0) {
        throw new Error(`Invalid specialization(s): ${invalid.join(", ")}`);
      }
      return true;
    }),
  query("primarySpecialization")
    .optional()
    .isString()
    .withMessage("Primary specialization must be a string")
    .isIn(SPECIALIZATIONS)
    .withMessage(
      `Primary SPECIALIZATION must be one of : ${SPECIALIZATIONS.join(", ")}`,
    ),
  query("practiceType")
    .optional()
    .isIn(["hospital", "private", "both"])
    .withMessage("Practice type must be hospital or private or both."),
  query("minFee")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("minFee must be a non-negative number")
    .toFloat(),
  query("maxFee")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("maxFee must be a non-negative number")
    .toFloat(),
  query("city")
    .optional()
    .isString()
    .withMessage("City must be a string")
    .trim(),
  query("state")
    .optional()
    .isString()
    .withMessage("State must be a string")
    .trim(),

  query("country")
    .optional()
    .isString()
    .withMessage("Country must be a string")
    .trim(),

  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be an integer greater than 0")
    .toInt(),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be an integer between 1 and 100")
    .toInt(),

  query("sort")
    .optional()
    .isIn(["fee_asc", "fee_desc", "newest", ])
    .withMessage("Sort must be one of fee_asc, fee_desc, newest"),


];

export const doctorDetailsValidator = [
  param("doctorId")
    .trim()
    .notEmpty()
    .withMessage("Doctor Id is required")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid doctor Id")

];


