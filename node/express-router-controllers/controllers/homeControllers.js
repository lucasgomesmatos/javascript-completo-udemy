exports.paginaInicial = (req, res) => {
  res.send(
    `
    <form action="/" method="POST">
      <label>Nome: </label>
      <input type="text" name="nome"/>
      <button>Enviar</button>
    </form>`
  );
}

exports.trataPost = (req, res) => {
  res.send('Ei, rota post')
}