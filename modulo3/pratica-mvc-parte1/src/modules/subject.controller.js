import * as subjectService from "./subject.service.js";

// GET /subjects - Retorna todas as disciplinas
export const getAllSubjectsController = (req, res) => {
    try {
        const subjects = subjectService.getAllSubjects();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar disciplinas", error: error.message });
    }
};

// GET /subjects/:id - Retorna uma disciplina por ID
export const getSubjectByIdController = (req, res) => {
    try {
        const { id } = req.params;
        const subject = subjectService.getSubjectById(id);

        if (!subject) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar disciplina", error: error.message });
    }
};

// POST /subjects - Cria uma nova disciplina
export const createSubjectController = (req, res) => {
    try {
        const { name, course, workload, year, graduation } = req.body;

        if (!name || !course || !workload || !year || graduation === undefined) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const newSubject = subjectService.createSubject({
            name,
            course,
            workload,
            year,
            graduation,
        });
        res.status(201).json(newSubject);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar disciplina", error: error.message });
    }
};

// PUT /subjects/:id - Atualiza uma disciplina
export const updateSubjectController = (req, res) => {
    try {
        const { id } = req.params;
        const subjectData = req.body;

        const updatedSubject = subjectService.updateSubject(id, subjectData);

        if (!updatedSubject) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar disciplina", error: error.message });
    }
};

// DELETE /subjects/:id - Remove uma disciplina
export const deleteSubjectController = (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubject = subjectService.deletedSubject(id);

        if (!deletedSubject) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        res.status(200).json({
            message: "Disciplina removida com sucesso",
            subject: deletedSubject,
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover disciplina", error: error.message });
    }
};
