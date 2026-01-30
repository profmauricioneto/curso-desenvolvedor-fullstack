import { useState, useEffect } from "react";
import { studentService } from "../services/studentService";
import { subjectService } from "../services/subjectService";
import "./StudentList.css";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cpf: "",
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const [studentsData, subjectsData] = await Promise.all([
                studentService.getAll(),
                subjectService.getAll(),
            ]);
            setStudents(studentsData);
            setSubjects(subjectsData);
            setError(null);
        } catch (err) {
            setError("Erro ao carregar dados: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await studentService.update(editingId, formData);
            } else {
                await studentService.create(formData);
            }

            setFormData({ name: "", email: "", cpf: "" });
            setEditingId(null);
            loadData();
        } catch (err) {
            setError("Erro ao salvar aluno: " + err.message);
        }
    };

    const handleEdit = (student) => {
        setFormData({
            name: student.name,
            email: student.email,
            cpf: student.cpf,
        });
        setEditingId(student.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir este aluno?")) {
            try {
                await studentService.delete(id);
                loadData();
            } catch (err) {
                setError("Erro ao excluir aluno: " + err.message);
            }
        }
    };

    const handleCancel = () => {
        setFormData({ name: "", email: "", cpf: "" });
        setEditingId(null);
    };

    if (loading) return <div className="loading">Carregando...</div>;

    return (
        <div className="student-list">
            <h2>Gerenciamento de Alunos</h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="student-form">
                <h3>{editingId ? "Editar Aluno" : "Novo Aluno"}</h3>

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
                    <label>Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>CPF:</label>
                    <input
                        type="text"
                        value={formData.cpf}
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                        required
                        maxLength="14"
                        placeholder="000.000.000-00"
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

            <div className="students-table">
                <h3>Lista de Alunos</h3>
                {students.length === 0 ? (
                    <p>Nenhum aluno cadastrado.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>CPF</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.cpf}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEdit(student)}
                                            className="btn btn-edit"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(student.id)}
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

            {subjects.length > 0 && (
                <div className="subjects-info">
                    <h3>Disciplinas Disponíveis</h3>
                    <p>Total: {subjects.length} disciplina(s)</p>
                </div>
            )}
        </div>
    );
}

export default StudentList;
