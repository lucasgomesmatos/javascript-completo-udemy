function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    // value: estoque, // valor
    // writable: false, // controla se pode ser alterado
    configurable: false, // configuravel
    get: () => {
      return estoque;
    },
    set: (valor) => {
      if(typeof valor !== 'number') {
        throw new TypeError('Mensagem');
      }
      estoque = valor;
    }
  });

 
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5;
console.log(p1.estoque)