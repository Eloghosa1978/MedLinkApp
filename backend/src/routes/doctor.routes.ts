import { doctorDiscoveryValidator, doctorDetailsValidator } from "../validators/doctor.validator";
import { validateRequest } from "../validators/validate";
import { doctorDiscoveryController, doctorDetailsController } from "../doctor/doctor.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { loadUserMiddleware } from "../middleware/loadUser.middleware";


import { Router } from "express";

const router = Router();

router.get("/",
  authMiddleware,
  loadUserMiddleware,
  doctorDiscoveryValidator,
  validateRequest,
  doctorDiscoveryController);


router.get(
  "/:doctorId",
  authMiddleware,
  loadUserMiddleware,
  doctorDetailsValidator,
  doctorDetailsController
)

export default router;