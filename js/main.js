const express = require('express');
const app = express();

// * Usado pra exibir a primeira mensagem ao entrar no site
// app.get('/', (req, res) => {
//     res.send("Estou online!");
// });

// * Usado para carregar a página a partir da raiz
// const path = require('path');

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html')); // Serve index.html na raiz
// });

// * Usado para carregar a página a partir de um diretório
app.use(express.static('pages'))

app.listen(3000, () => {
    console.log("Rodando na porta: 3000");
}).on('error', (err) => {
    console.error("Erro no servidor:", err);
});