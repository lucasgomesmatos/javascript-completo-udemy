/**
 * Some todos os números (Reduce)
 * Retorne um array com os pares (Filter)
 * Retorne um array com o dobro dos valores (Map)
 */
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// reduce -> acumulador, valor, indice, array
const total = numeros.reduce((acumulador, valor) => {
  return acumulador += valor;
}, 0);

const pares = numeros.filter((valor) => {
  return valor % 2 === 0;
});

const dobro = numeros.map((valor) => {
  return valor * 2;
});

// console.log(dobro);



// Retorne a pessoa mais velha
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 64},
  {nome: 'Wallace', idade: 47},
];


const maisVelha = pessoas.reduce((acumulador, valor) => {
  if(acumulador.idade > valor.idade){
    return acumulador;
  }
  return valor;
});

console.log(maisVelha);


