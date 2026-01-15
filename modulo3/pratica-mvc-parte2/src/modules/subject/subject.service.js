const prisma = require('../../config/prisma');

class SubjectService {
    // Criar uma nova disciplina
    async createSubject(data) {
        const { name, description, workload } = data;
        
        const subject = await prisma.subject.create({
            data: {
                name,
                description,
                workload
            }
        });
        
        return subject;
    }

    // Listar todas as disciplinas
    async getAllSubjects() {
        const subjects = await prisma.subject.findMany({
            include: {
                students: {
                    include: {
                        student: true
                    }
                }
            }
        });
        
        return subjects;
    }

    // Buscar disciplina por ID
    async getSubjectById(id) {
        const subject = await prisma.subject.findUnique({
            where: { id: parseInt(id) },
            include: {
                students: {
                    include: {
                        student: true
                    }
                }
            }
        });
        
        return subject;
    }

    // Atualizar disciplina
    async updateSubject(id, data) {
        const { name, description, workload } = data;
        
        const subject = await prisma.subject.update({
            where: { id: parseInt(id) },
            data: {
                name,
                description,
                workload
            }
        });
        
        return subject;
    }

    // Deletar disciplina
    async deleteSubject(id) {
        const subject = await prisma.subject.delete({
            where: { id: parseInt(id) }
        });
        
        return subject;
    }

    // Adicionar aluno à disciplina
    async addStudentToSubject(subjectId, studentId) {
        const enrollment = await prisma.studentSubject.create({
            data: {
                subjectId: parseInt(subjectId),
                studentId: parseInt(studentId)
            }
        });
        
        return enrollment;
    }

    // Remover aluno da disciplina
    async removeStudentFromSubject(subjectId, studentId) {
        const enrollment = await prisma.studentSubject.deleteMany({
            where: {
                subjectId: parseInt(subjectId),
                studentId: parseInt(studentId)
            }
        });
        
        return enrollment;
    }
}

module.exports = new SubjectService();
