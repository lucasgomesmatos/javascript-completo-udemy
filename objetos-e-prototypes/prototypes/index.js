// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => {
    return `${nome} ${sobrenome}`;
  }
}
const p1 = new Pessoa('Lucas', 'Gomes');

console.log(p1.nomeCompleto())