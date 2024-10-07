const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear o corpo da requisição como JSON
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// Rota para obter dados
app.get('/dados', (req, res) => {
    const dados = [
        { id: 1, nome: 'Item 1' },
        { id: 2, nome: 'Item 2' },
        { id: 3, nome: 'Item 3' },
    ];
    res.json(dados);
});

// Rota para criar um novo dado
app.post('/dados', (req, res) => {
    const novoDado = req.body;
    // Aqui você normalmente faria a lógica para salvar o novo dado
    res.status(201).json(novoDado);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});