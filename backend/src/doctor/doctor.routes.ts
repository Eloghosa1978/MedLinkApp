import { doctorDiscoveryValidator } from "../validators/doctor.validator";
import { validateRequest } from "../validators/validate";
import { doctorController } from "./doctor.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { loadUserMiddleware } from "../middleware/loadUser.middleware";


import { Router } from "express";

const router = Router();

router.get("/",
  authMiddleware,
  loadUserMiddleware,
  doctorDiscoveryValidator,
  validateRequest,
  doctorController);