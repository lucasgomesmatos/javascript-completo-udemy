// Argumentos que sustenta todos os argumentos enviados
function funcao() {
  let total = 0;
  for(let argumento of arguments) {
    total += argumento;
  }
  console.log(total)
}

funcao(0,1,2,3,4)


function funcao2(a, b, c, d, e) {
  
  console.log(a, b, c, d, e)
}

funcao2(1,2,3,4)

function soma(a, b = 0) {
  console.log(a + b)
}

soma(5, 5)


function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '/') acumulador /= numero;
    if(operador === '*') acumulador *= numero;
  }

  console.log(acumulador);
}

conta('+', 0, 1,2,3,4)