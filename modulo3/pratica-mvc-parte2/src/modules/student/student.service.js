const prisma = require('../../config/prisma');

class StudentService {
    // Criar um novo aluno
    async createStudent(data) {
        const { name, email, cpf } = data;
        
        const student = await prisma.student.create({
            data: {
                name,
                email,
                cpf
            }
        });
        
        return student;
    }

    // Listar todos os alunos
    async getAllStudents() {
        const students = await prisma.student.findMany({
            include: {
                subjects: {
                    include: {
                        subject: true
                    }
                }
            }
        });
        
        return students;
    }

    // Buscar aluno por ID
    async getStudentById(id) {
        const student = await prisma.student.findUnique({
            where: { id: parseInt(id) },
            include: {
                subjects: {
                    include: {
                        subject: true
                    }
                }
            }
        });
        
        return student;
    }

    // Atualizar aluno
    async updateStudent(id, data) {
        const { name, email, cpf } = data;
        
        const student = await prisma.student.update({
            where: { id: parseInt(id) },
            data: {
                name,
                email,
                cpf
            }
        });
        
        return student;
    }

    // Deletar aluno
    async deleteStudent(id) {
        const student = await prisma.student.delete({
            where: { id: parseInt(id) }
        });
        
        return student;
    }

    // Matricular aluno em disciplina
    async enrollInSubject(studentId, subjectId) {
        const enrollment = await prisma.studentSubject.create({
            data: {
                studentId: parseInt(studentId),
                subjectId: parseInt(subjectId)
            }
        });
        
        return enrollment;
    }

    // Remover matrícula de aluno em disciplina
    async unenrollFromSubject(studentId, subjectId) {
        const enrollment = await prisma.studentSubject.deleteMany({
            where: {
                studentId: parseInt(studentId),
                subjectId: parseInt(subjectId)
            }
        });
        
        return enrollment;
    }
}

module.exports = new StudentService();
