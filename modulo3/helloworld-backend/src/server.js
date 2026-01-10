const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello World from NodeJS"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
})