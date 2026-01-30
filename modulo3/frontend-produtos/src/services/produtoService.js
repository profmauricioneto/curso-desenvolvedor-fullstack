import api from "./api";

export const produtoService = {
    // Listar todos os produtos
    getAll: async () => {
        const response = await api.get("/produtos");
        return response.data;
    },

    // Buscar produto por ID
    getById: async (id) => {
        const response = await api.get(`/produtos/${id}`);
        return response.data;
    },

    // Criar novo produto
    create: async (produtoData) => {
        const response = await api.post("/produtos", produtoData);
        return response.data;
    },

    // Atualizar produto
    update: async (id, produtoData) => {
        const response = await api.put(`/produtos/${id}`, produtoData);
        return response.data;
    },

    // Deletar produto
    delete: async (id) => {
        const response = await api.delete(`/produtos/${id}`);
        return response.data;
    },
};
