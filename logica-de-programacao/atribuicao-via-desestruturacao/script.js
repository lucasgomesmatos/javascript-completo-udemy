/**
 * ... rest -> pegar o resto 
 * ... spread -> distribuir
 */

const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero, ...resto] = numeros

const [, , terceiroNumero, ...restante] = numeros


console.log(primeiroNumero, segundoNumero, resto)
console.log(terceiroNumero, restante)