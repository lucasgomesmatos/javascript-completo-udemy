// Declaração de função (FUnction hoisting)
falando()


function falando() {
  console.log('Olá');
}

// Frist-class objects (Objetos de primeira classe)

const dados = function () {
  console.log('Sou um dado');
}

function executaUmaFuncao(funcao) {
  funcao();
}

executaUmaFuncao(dados);

// Arrow function 

const funcaoArrow = () => {
  console.log('Arrow function');
}

funcaoArrow();

// Dentro de um objeto

const obj = {
  falar: function() {
    console.log('Estou falando...')
  }
}

obj.falar();