import express from "express";
import dotenv from "dotenv";
import subjectRoutes from "./modules/subjects/subject.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import pino from "pino";
import pinoHTTP from "pino-http";

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurando o PINO para logs
const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        }
    }
});


// middlewares globais
app.use(express.json());
app.use(pinoHTTP({ logger }));

// Rotas
app.use("/auth", authRoutes);
app.use("/subjects", subjectRoutes);

// Rota raiz
app.get("/", (req, res) => {
    res.json({
        message: "API de Gerenciamento de Disciplinas com JWT",
        endpoints: {
            auth: {
                login: "POST /auth/login",
                register: "POST /auth/register",
                me: "GET /auth/me"
            },
            subjects: {
                getAll: "GET /subjects",
                getById: "GET /subjects/:id",
                create: "POST /subjects",
                update: "PUT /subjects/:id",
                delete: "DELETE /subjects/:id"
            }
        }
    });
});

app.listen(PORT, () => {
    logger.info(`[Start server in: http://localhost:${PORT}]`);
});
