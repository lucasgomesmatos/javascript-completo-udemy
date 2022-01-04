const produto = {nome: 'Caneca', preco: 1.8}

// Copia o objeto
const outroProduto = {
  ...produto,
  material: 'porcelana'
};

//Copia o objeto
const produto2 = Object.assign({}, produto, {material: 'plastico'})

outroProduto.nome = 'Jarra';
// console.log(outroProduto);
// console.log(produto2);

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


const produtoNovo = {nome: 'Caneta', preco: 0.08};

Object.defineProperty(produtoNovo, 'nome', {
  writable: false,
  configurable: false,
  value: 'Lápis'
});

console.log(Object.getOwnPropertyDescriptor(produtoNovo, 'nome'));

for(let [chave, valor] of Object.entries(produtoNovo)) {
  console.log(chave, valor)
}