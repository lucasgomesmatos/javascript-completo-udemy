const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
  );

app.get('/', (req, res) => {
  res.send(
    `<form action="/" method="POST">
      <label>Nome: </label>
      <input type="text" name="nome"/>
      <button>Enviar</button>
    </form>`
  );
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O que você me envoiu: <strong>${req.body.nome}</strong>`)
});

app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.query)
  console.log(req.params);
  res.send(req.params.idUsuarios)
});


app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato.')
});

app.listen(3000, () => {
  console.log('Servidor executando!')
});

