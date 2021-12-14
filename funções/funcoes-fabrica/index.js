// Factory Functions

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura: altura,
    peso: peso,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join();
    },

    fala: function(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
   
    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2)
    }
  };
}

const p1 = criaPessoa('Lucas', 'Gomes', 1.85, 75);
const p2 = criaPessoa('Maria', 'Gomes', 1.85, 75);

p1.nomeCompleto = 'Maria Matos';
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
console.log(p1.imc)


