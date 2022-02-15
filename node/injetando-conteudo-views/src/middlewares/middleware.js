exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é uma valor da variável local.";

  next();
};
