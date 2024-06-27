import { Router } from "express";
import UserController from "../controllers/users.js";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getSpecificUser);

export default router;
