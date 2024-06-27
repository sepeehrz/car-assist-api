import { Router } from "express";
import ServicesController from "../controllers/services.js";
import auth from '../middleware/auth.js';

const router = Router();

router.get("/",auth, ServicesController.index);
router.post("/",auth, ServicesController.store);
router.get("/:id", ServicesController.show);
router.put("/:id", ServicesController.update);
router.delete("/:id", ServicesController.destroy);

export default router;
