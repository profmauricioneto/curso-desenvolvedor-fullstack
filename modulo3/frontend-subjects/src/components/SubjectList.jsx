import { useState, useEffect } from "react";
import { subjectService } from "../services/subjectService";
import "./SubjectList.css";

function SubjectList() {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        workload: "",
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadSubjects();
    }, []);

    const loadSubjects = async () => {
        try {
            setLoading(true);
            const data = await subjectService.getAll();
            setSubjects(data);
            setError(null);
        } catch (err) {
            setError("Erro ao carregar disciplinas: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const subjectData = {
                ...formData,
                workload: parseInt(formData.workload),
            };

            if (editingId) {
                await subjectService.update(editingId, subjectData);
            } else {
                await subjectService.create(subjectData);
            }

            setFormData({ name: "", description: "", workload: "" });
            setEditingId(null);
            loadSubjects();
        } catch (err) {
            setError("Erro ao salvar disciplina: " + err.message);
        }
    };

    const handleEdit = (subject) => {
        setFormData({
            name: subject.name,
            description: subject.description || "",
            workload: subject.workload.toString(),
        });
        setEditingId(subject.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir esta disciplina?")) {
            try {
                await subjectService.delete(id);
                loadSubjects();
            } catch (err) {
                setError("Erro ao excluir disciplina: " + err.message);
            }
        }
    };

    const handleCancel = () => {
        setFormData({ name: "", description: "", workload: "" });
        setEditingId(null);
    };

    if (loading) return <div className="loading">Carregando...</div>;

    return (
        <div className="subject-list">
            <h2>Gerenciamento de Disciplinas</h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="subject-form">
                <h3>{editingId ? "Editar Disciplina" : "Nova Disciplina"}</h3>

                <div className="form-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows="3"
                    />
                </div>

                <div className="form-group">
                    <label>Carga Horária (horas):</label>
                    <input
                        type="number"
                        value={formData.workload}
                        onChange={(e) => setFormData({ ...formData, workload: e.target.value })}
                        required
                        min="1"
                    />
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

            <div className="subjects-table">
                <h3>Lista de Disciplinas</h3>
                {subjects.length === 0 ? (
                    <p>Nenhuma disciplina cadastrada.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Carga Horária</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject) => (
                                <tr key={subject.id}>
                                    <td>{subject.id}</td>
                                    <td>{subject.name}</td>
                                    <td>{subject.description || "-"}</td>
                                    <td>{subject.workload}h</td>
                                    <td>
                                        <button
                                            onClick={() => handleEdit(subject)}
                                            className="btn btn-edit"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(subject.id)}
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

export default SubjectList;
