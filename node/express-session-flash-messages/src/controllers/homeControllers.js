exports.paginaInicial = (req, res) => {
  console.log(req.session.usuario)
  // req.session.usuario = {nome: 'Lucas', logado: true}
  // req.flash('error', 'Error na página');
  console.log(req.flash('error'))
  res.render('index');
  return;
}

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
}