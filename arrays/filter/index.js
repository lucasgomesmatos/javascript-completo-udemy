/**
 * filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.
 */


// Retorne os números maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// método com for
const arrayNumeros = [];
for(let i of numeros) {
  if(i > 10) arrayNumeros.push(i);
}
// console.log(arrayNumeros);


/* Várias maneiras de usar o filter com funções
 
1 -> function callback(valor, indice, array ) {
  return valor > 10;
}

2 -> const numerosFiltrados = numeros.filter(valor => valor > 10);

3 -> const numerosFiltrados = numeros.filter((valor) => {
return valor > 10
});

 */


// método filter
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);



/**
 * Retorne as pessoas que tem o nome com 5 letras ou mais
 * Retorne as pessoas com mais de 50 anos
 * Retorne as pessoas cujo nome terminas com a
 */

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];


const pessoasComNomeGrande = pessoas.filter((pessoa)=> {
  return pessoa.nome.length >= 5 ;
});

const pessoasCinquenta = pessoas.filter((pessoa)=> {
  return (pessoa.idade > 50) ;
});

const pessoasComA = pessoas.filter((pessoa)=> {
  return (pessoa.nome.slice(-1) === 'a') ;
});

console.log(pessoasComNomeGrande);
console.log(pessoasCinquenta);
console.log(pessoasComA);