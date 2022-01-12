// Produto -> aumento, desconto
// Camiseta = Cor 
// Caneca = material


function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
  this.preco += valor;
};

Produto.prototype.desconto = function(valor) {
  this.desconto -= valor;
}


function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque ) {
  Produto.call(this, nome, preco);
  this.material = material;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if(typeof valor !== 'number') return;
      estoque = valor
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const protuto = new Produto('Regata', 25);
const camiseta = new Camiseta('Regata', 25, 'Preto');
const caneca = new Caneca('xícara', 10, 'Porcelana', 30);

caneca.estoque = 100;

console.log(protuto);
console.log(camiseta);
console.log(caneca);