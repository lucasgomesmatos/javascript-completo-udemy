// // const app = require('./mod1');
// const {nome, sobrenome, falaNome} = require('./mod1');

// console.log(nome, sobrenome);
// console.log(falaNome());

// const { Pessoa } = require('./mod1');
const axios = require('axios');

// const p1 = new Pessoa('Lucas');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then((response) => {
    const pessoa = response.data
    console.log(pessoa)
  })
  .catch(e => console.log(e))

  
