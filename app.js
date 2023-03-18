const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

const rotas = require('./app/routes/router');
app.use('/', rotas);

app.listen(port, () => {
    console.log(`Porta ${port} aberta :D`);
});