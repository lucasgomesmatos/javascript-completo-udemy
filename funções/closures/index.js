function retornaFuncao(nome) {
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Gomes');

console.log(funcao(), funcao2())