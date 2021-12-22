const nomes = ['Lucas', 'Maria', 'João', 'Eduardo', 'Pedro'];

const novo = nomes.slice(0, -1);
console.log(novo);

// const copiaNomes = [...nomes]; // copia do array
// copiaNomes.pop();
// console.log(nomes, copiaNomes)


const nome = 'Lucas Gomes Matos';
const nomesSplit = nome.split(' '); // separa por espaços
const nomesNovo = nomesSplit.join(' '); // junta os nomes 

console.log(nomesSplit, nomesNovo)


// unshift -> adiciona no começo;
// shift -> remove no começo;
// push -> adiciona no final;
// pop -> remove no final;