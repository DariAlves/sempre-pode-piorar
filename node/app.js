const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = 3030;

/* Rotas */
app.get('/', (request, response) => {
  const nome = 'João';

  return response.render('index', { title: 'Home', nome });
});

app.get('/produtos', (request, response) => {
  return response.render('produtos', { title: 'Produtos' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
