const subjectService = require('./subject.service');

class SubjectController {
    // Criar disciplina
    async create(req, res) {
        try {
            const subject = await subjectService.createSubject(req.body);
            return res.status(201).json(subject);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Listar todas as disciplinas
    async getAll(req, res) {
        try {
            const subjects = await subjectService.getAllSubjects();
            return res.status(200).json(subjects);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Buscar disciplina por ID
    async getById(req, res) {
        try {
            const subject = await subjectService.getSubjectById(req.params.id);
            
            if (!subject) {
                return res.status(404).json({ error: 'Disciplina não encontrada' });
            }
            
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Atualizar disciplina
    async update(req, res) {
        try {
            const subject = await subjectService.updateSubject(req.params.id, req.body);
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Deletar disciplina
    async delete(req, res) {
        try {
            await subjectService.deleteSubject(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Adicionar aluno à disciplina
    async addStudent(req, res) {
        try {
            const { studentId } = req.body;
            const enrollment = await subjectService.addStudentToSubject(
                req.params.id,
                studentId
            );
            return res.status(201).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Remover aluno da disciplina
    async removeStudent(req, res) {
        try {
            const { studentId } = req.params;
            await subjectService.removeStudentFromSubject(
                req.params.id,
                studentId
            );
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new SubjectController();
