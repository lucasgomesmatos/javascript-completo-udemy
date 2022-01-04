// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa('Lucas', 'Gomes');
const data = new Date();

console.log(p1.nomeCompleto())
console.log(data)