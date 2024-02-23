require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const db = require('./database/db.js');
db();

// Routes
app.use(require('./routes/index.js'));

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});