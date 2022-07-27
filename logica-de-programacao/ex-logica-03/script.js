/**
 * Escreva uma função que recebe um número e
 * retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = retorna o próprio número
 * Checar se o número é realmente um número
 * Use a  função com número de 0 a 100
 */

function FizzBuzz(x) {
  if(typeof x !== 'number'){return x;}
  if(x % 3 === 0 && x % 5 === 0) {return 'FizzBuzz'};
  if(x % 3 !== 0 && x % 5 !== 0) {return x};
  if(x % 3 === 0) {return 'Fizz'};
  if(x % 5 === 0) {return 'Buzz'};
}

for(let i = 0; i <= 100; i++) {
  console.log(FizzBuzz(i))
}