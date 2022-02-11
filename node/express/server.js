const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello word');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato.')
})

app.listen(3000, () => {
  console.log('Servidor executando!')
});

