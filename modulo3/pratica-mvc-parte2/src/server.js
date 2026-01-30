require("dotenv").config();
const express = require("express");
const cors = require("cors");
const subjectRoutes = require("./modules/subject/subject.routes");
const studentRoutes = require("./modules/student/student.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração CORS
app.use(
    cors({
        origin: "http://localhost:5173", // URL do frontend
        credentials: true,
    })
);

app.use(express.json());

// Rotas da aplicação
app.use("/api/subjects", subjectRoutes);
app.use("/api/students", studentRoutes);

// Rota de teste
app.get("/", (req, res) => {
    res.json({
        message: "API de Gerenciamento de Disciplinas e Alunos",
        endpoints: {
            subjects: "/api/subjects",
            students: "/api/students",
        },
    });
});

app.listen(PORT, () => {
    console.log(`Server running in: http://localhost:${PORT}`);
});
