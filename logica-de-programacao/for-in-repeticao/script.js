const frutas = ['maça', 'pêra', 'banana', 'uva'];

for(let i in frutas) {
  console.log(`${i} =>`, frutas[i])
}

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Gomes',
  idade: 30
};

for(let j in pessoa) {
  console.log(`${j} =>`, pessoa[j])
}