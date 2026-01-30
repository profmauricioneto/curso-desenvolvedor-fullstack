import { useState } from "react";
import SubjectList from "./components/SubjectList";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
    const [activeTab, setActiveTab] = useState("subjects");

    return (
        <div className="app">
            <header className="app-header">
                <h1>Sistema de Gerenciamento Acadêmico</h1>
                <p>Gerenciamento de Disciplinas e Alunos</p>
            </header>

            <nav className="app-nav">
                <button
                    className={activeTab === "subjects" ? "active" : ""}
                    onClick={() => setActiveTab("subjects")}
                >
                    Disciplinas
                </button>
                <button
                    className={activeTab === "students" ? "active" : ""}
                    onClick={() => setActiveTab("students")}
                >
                    Alunos
                </button>
            </nav>

            <main className="app-content">
                {activeTab === "subjects" ? <SubjectList /> : <StudentList />}
            </main>

            <footer className="app-footer">
                <p>Desenvolvido com React + Vite | API: Node.js + Express + Prisma</p>
            </footer>
        </div>
    );
}

export default App;
