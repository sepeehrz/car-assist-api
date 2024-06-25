import { Router } from "express";
import ServiceTypesController from "../controllers/serviceTypes.js";

const router = Router();

router.get("/", ServiceTypesController.index);
router.get("/", ServiceTypesController.store);

export default router;
