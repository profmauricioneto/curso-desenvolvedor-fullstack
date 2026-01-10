import express from "express";
import * as subjectController from "./subject.controller.js";

const router = express.Router();

// Rotas principais
router.get("/", subjectController.getAllSubjectsController);
router.get("/:id", subjectController.getSubjectByIdController);
router.post("/", subjectController.createSubjectController);
router.put("/:id", subjectController.updateSubjectController);
router.delete("/:id", subjectController.deleteSubjectController);

export default router;
