const studentService = require('./student.service');

class StudentController {
    // Criar aluno
    async create(req, res) {
        try {
            const student = await studentService.createStudent(req.body);
            return res.status(201).json(student);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Listar todos os alunos
    async getAll(req, res) {
        try {
            const students = await studentService.getAllStudents();
            return res.status(200).json(students);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Buscar aluno por ID
    async getById(req, res) {
        try {
            const student = await studentService.getStudentById(req.params.id);
            
            if (!student) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }
            
            return res.status(200).json(student);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Atualizar aluno
    async update(req, res) {
        try {
            const student = await studentService.updateStudent(req.params.id, req.body);
            return res.status(200).json(student);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Deletar aluno
    async delete(req, res) {
        try {
            await studentService.deleteStudent(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Matricular aluno em disciplina
    async enrollSubject(req, res) {
        try {
            const { subjectId } = req.body;
            const enrollment = await studentService.enrollInSubject(
                req.params.id,
                subjectId
            );
            return res.status(201).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Remover matrícula de disciplina
    async unenrollSubject(req, res) {
        try {
            const { subjectId } = req.params;
            await studentService.unenrollFromSubject(
                req.params.id,
                subjectId
            );
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new StudentController();
