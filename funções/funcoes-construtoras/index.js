// função construtora -> objetos
// função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {

   // Atributos ou métodos privados
  const id = 12356;
  const metodoInterno = () => {}

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.fala = () => {
    console.log(`${this.nome} ${this.sobrenome} está falando.`)
  }
}

const pessoa1 = new Pessoa('Lucas', 'Gomes');
const pessoa2 = new Pessoa('Maria', 'Matos');

pessoa2.fala();
console.log(pessoa1.nome );