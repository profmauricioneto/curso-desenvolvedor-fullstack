import express from "express";
import * as subjectController from "./subject.controller.js";
import { authenticateToken, authorizeRoles } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Rotas principais
router.get("/", authenticateToken, subjectController.getAllSubjectsController);
router.get("/:id", authenticateToken, subjectController.getSubjectByIdController);
router.post("/", authenticateToken, authorizeRoles("admin", "professor"), subjectController.createSubjectController);
router.put("/:id", authenticateToken, authorizeRoles("admin", "professor"), subjectController.updateSubjectController);
router.delete("/:id", authenticateToken, authorizeRoles("admin"), subjectController.deleteSubjectController);

export default router;
