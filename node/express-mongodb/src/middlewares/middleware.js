exports.middlewareGlobal = (req, res, next) => {
  if(req.body.cliente) {
    console.log(`Vi que você postou ${req.body.cliente}`)
    console.log();
    console.log('Passei no middleware global');
  }
  
  next()
}