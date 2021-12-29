// Factory Functions ou Constructor Function ou Class


// Factory Functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  }
}

const p1 = criaPessoa('Lucas', 'Gomes');
console.log(p1.nomeCompleto());


// Constructor Function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
} 

const p2 = new Pessoa('Lucas', 'Gomes');
Object.freeze(p1); // Trava objeto  de alteração
console.log(p2.nome);