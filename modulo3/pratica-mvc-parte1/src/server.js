import express from "express";
import subjectRoutes from "./modules/subject.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/subjects", subjectRoutes);

app.listen(PORT, () => {
    console.log(`Server running in: http://localhost:${PORT}`);
});
