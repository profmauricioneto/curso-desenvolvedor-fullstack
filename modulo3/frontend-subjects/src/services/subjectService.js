import api from "./api";

export const subjectService = {
    // Listar todas as disciplinas
    getAll: async () => {
        const response = await api.get("/subjects");
        return response.data;
    },

    // Buscar disciplina por ID
    getById: async (id) => {
        const response = await api.get(`/subjects/${id}`);
        return response.data;
    },

    // Criar nova disciplina
    create: async (subjectData) => {
        const response = await api.post("/subjects", subjectData);
        return response.data;
    },

    // Atualizar disciplina
    update: async (id, subjectData) => {
        const response = await api.put(`/subjects/${id}`, subjectData);
        return response.data;
    },

    // Deletar disciplina
    delete: async (id) => {
        const response = await api.delete(`/subjects/${id}`);
        return response.data;
    },
};
