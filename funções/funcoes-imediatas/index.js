// IIFE -> immediately invoked function expression

(function (idade) {
  const sobrenome = 'Gomes'
  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }

  function falaNome() {
    console.log(criaNome('Lucas'))
  }
  falaNome()
  console.log(idade)
})(22);

