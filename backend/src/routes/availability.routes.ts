import { Router } from "express";
import { validateRequest } from "../validators/validate";
import {
  createAvailabilityValidator,
  getAvailabilityByIdValidator,
  getDoctorAvailabilityValidator,
  deleteAvailabilityValidator,
  updateAvailabilityValidator,
} from "../validators/availability.validator";

import {
  createAvailabilityController,
  getMyAvailabilityController,
  getDoctorAvailabilityController,
  getAvailabilityByIdController,
  updateAvailabilityController,
  deleteAvailabilityController,
} from "../availability/availability.controller";

import { authMiddleware } from "../middleware/auth.middleware";
import { loadUserMiddleware } from "../middleware/loadUser.middleware";
import { authorizeRole } from "../middleware/authorize.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  loadUserMiddleware,
  authorizeRole("doctor"),
  createAvailabilityValidator,
  validateRequest,
  createAvailabilityController,
);
router.get(
  "/",
  authMiddleware,
  loadUserMiddleware,
  authorizeRole("doctor"),
  getMyAvailabilityController,
);

router.get(
  "/:availabilityId",
  authMiddleware,
  loadUserMiddleware,
  authorizeRole("doctor"),
  getAvailabilityByIdValidator,
  validateRequest,
  getAvailabilityByIdController,
);

router.patch(
  "/:availabilityId",
  authMiddleware,
  loadUserMiddleware,
  authorizeRole("doctor"),
  updateAvailabilityValidator,
  validateRequest,
  updateAvailabilityController,
);

router.delete(
  "/:availabilityId",
  authMiddleware,
  loadUserMiddleware,
  authorizeRole("doctor"),
  deleteAvailabilityValidator,
  validateRequest,
  deleteAvailabilityController,
);

// for patients to get a doctor's availability
router.get(
  "/doctor/:doctorId",
  authMiddleware,
  loadUserMiddleware,
  authorizeRole("patient"),
  getDoctorAvailabilityValidator,
  validateRequest,
  getDoctorAvailabilityController,
);

export default router;