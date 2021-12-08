/**
 * ... rest -> pegar o resto 
 * ... spread -> distribuir
 */

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Gomes',
  idade: 22,
  endereco : {
    rua: 'Rua Centro',
    numero: '11'
  }
}

// Atribuição via desestruturação
const {nome: teste = '', sobrenome, } = pessoa;
console.log(teste, sobrenome);

const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);


const {nome, ...resto} = pessoa;
console.log(resto);