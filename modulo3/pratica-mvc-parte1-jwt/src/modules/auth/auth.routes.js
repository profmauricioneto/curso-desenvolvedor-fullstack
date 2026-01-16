import express from "express";
import * as authController from "./auth.controller.js";
import { authenticateToken } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Rotas públicas
router.post("/login", authController.loginController);
router.post("/register", authController.registerController);

// Rotas protegidas
router.get("/myprofile", authenticateToken, authController.getMeController);

export default router;
