# Métodos úteis para objetos.

Fazer uma cópia de um objeto em JavaScript.

```javascript
// Criando um objeto.
const produto = {nome: 'Caneca', preco: 1.8};

// Fazendo um cópia do objeto.

//Com Spread (...)
const Produto2 = {
  ...produto,
  material: 'porcelana'
};

// Com Object.assign
const produto2 = Object.assign({}, produto, {material: 'plastico'})


```



