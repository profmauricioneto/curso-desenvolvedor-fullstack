import express from "express";
import subjectRoutes from "./modules/subject.routes.js";
import pino from "pino";
import pinoHTTP from "pino-http";

const app = express();
// configurando o PINO para 
const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        }
    }
});
const PORT = 3000;

app.use(express.json());
app.use(pinoHTTP({ logger }));
app.use("/subjects", subjectRoutes);

app.listen(PORT, () => {
    logger.info(`[Start server in: http://localhost:${PORT}]`);
});
