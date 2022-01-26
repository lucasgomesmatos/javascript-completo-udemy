export const nome = 'Lucas';
export const sobrenome = 'Gomes';
export const idade = 23;

export function soma(x,y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}