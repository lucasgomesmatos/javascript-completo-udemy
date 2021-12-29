// defineProperty - defineProperties


function Produto(nome, preco, estoque) {
  // this.nome = nome;
  // this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // controla se pode ser alterado
    configurable: false // configuravel
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // controla se pode ser alterado
      configurable: true // configuravel
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: true, // controla se pode ser alterado
      configurable: true // configuravel
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)