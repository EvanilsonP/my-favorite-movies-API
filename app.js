require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
// const db = require('./database/db.js');
// db();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});