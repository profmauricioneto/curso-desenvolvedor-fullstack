import { useState, useEffect } from "react";
import { produtoService } from "../services/produtoService";
import "./ProdutoList.css";

function ProdutoList() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        preco: "",
        quantidade: "",
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadProdutos();
    }, []);

    const loadProdutos = async () => {
        try {
            setLoading(true);
            const data = await produtoService.getAll();
            setProdutos(data);
            setError(null);
        } catch (err) {
            setError("Erro ao carregar produtos: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const produtoData = {
                nome: formData.nome,
                preco: parseFloat(formData.preco),
                quantidade: parseInt(formData.quantidade),
            };

            if (editingId) {
                await produtoService.update(editingId, produtoData);
            } else {
                await produtoService.create(produtoData);
            }

            setFormData({ nome: "", preco: "", quantidade: "" });
            setEditingId(null);
            loadProdutos();
        } catch (err) {
            setError("Erro ao salvar produto: " + err.message);
        }
    };

    const handleEdit = (produto) => {
        setFormData({
            nome: produto.nome,
            preco: produto.preco.toString(),
            quantidade: produto.quantidade.toString(),
        });
        setEditingId(produto.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir este produto?")) {
            try {
                await produtoService.delete(id);
                loadProdutos();
            } catch (err) {
                setError("Erro ao excluir produto: " + err.message);
            }
        }
    };

    const handleCancel = () => {
        setFormData({ nome: "", preco: "", quantidade: "" });
        setEditingId(null);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    const calculateTotal = () => {
        return produtos.reduce((total, produto) => {
            return total + produto.preco * produto.quantidade;
        }, 0);
    };

    if (loading) return <div className="loading">Carregando...</div>;

    return (
        <div className="produto-list">
            <h2>Gerenciamento de Produtos</h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="produto-form">
                <h3>{editingId ? "Editar Produto" : "Novo Produto"}</h3>

                <div className="form-group">
                    <label>Nome do Produto:</label>
                    <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                        placeholder="Digite o nome do produto"
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Preço (R$):</label>
                        <input
                            type="number"
                            step="0.01"
                            value={formData.preco}
                            onChange={(e) => setFormData({ ...formData, preco: e.target.value })}
                            required
                            min="0"
                            placeholder="0.00"
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantidade:</label>
                        <input
                            type="number"
                            value={formData.quantidade}
                            onChange={(e) =>
                                setFormData({ ...formData, quantidade: e.target.value })
                            }
                            required
                            min="0"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        {editingId ? "Atualizar" : "Criar"}
                    </button>
                    {editingId && (
                        <button type="button" onClick={handleCancel} className="btn btn-secondary">
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            <div className="produtos-table">
                <div className="table-header">
                    <h3>Lista de Produtos</h3>
                    {produtos.length > 0 && (
                        <div className="stats">
                            <span>Total de Produtos: {produtos.length}</span>
                            <span>Valor Total em Estoque: {formatPrice(calculateTotal())}</span>
                        </div>
                    )}
                </div>

                {produtos.length === 0 ? (
                    <p className="empty-message">Nenhum produto cadastrado.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Valor Total</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto) => (
                                <tr key={produto.id}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{formatPrice(produto.preco)}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>{formatPrice(produto.preco * produto.quantidade)}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEdit(produto)}
                                            className="btn btn-edit"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(produto.id)}
                                            className="btn btn-delete"
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default ProdutoList;
