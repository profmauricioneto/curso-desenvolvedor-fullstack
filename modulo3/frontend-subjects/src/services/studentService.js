import api from "./api";

export const studentService = {
    // Listar todos os alunos
    getAll: async () => {
        const response = await api.get("/students");
        return response.data;
    },

    // Buscar aluno por ID
    getById: async (id) => {
        const response = await api.get(`/students/${id}`);
        return response.data;
    },

    // Criar novo aluno
    create: async (studentData) => {
        const response = await api.post("/students", studentData);
        return response.data;
    },

    // Atualizar aluno
    update: async (id, studentData) => {
        const response = await api.put(`/students/${id}`, studentData);
        return response.data;
    },

    // Deletar aluno
    delete: async (id) => {
        const response = await api.delete(`/students/${id}`);
        return response.data;
    },

    // Matricular aluno em disciplina
    enrollSubject: async (studentId, subjectId) => {
        const response = await api.post(`/students/${studentId}/subjects`, { subjectId });
        return response.data;
    },

    // Desmatricular aluno de disciplina
    unenrollSubject: async (studentId, subjectId) => {
        const response = await api.delete(`/students/${studentId}/subjects/${subjectId}`);
        return response.data;
    },
};
