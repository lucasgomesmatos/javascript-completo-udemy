/**
 * Diferença entre var, let e const
 * 
 * Let tem o escopo de bloco {...bloco}
 * Var só tem escopo de função
 */

const verdadeira = true;

let nome = 'Lucas';
var nome2 = 'Gomes';

if(verdadeira) {
  let nome = 'Lucas Gomes'
  console.log(nome, nome2);

  if(verdadeira) {
    let nome = 'Lucas Matos'
    console.log(nome, nome2);
  }
}