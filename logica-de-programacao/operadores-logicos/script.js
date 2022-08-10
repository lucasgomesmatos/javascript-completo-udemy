/**
 * Operadores Lógicos
 * && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU ->
 * ! -> NOT -> NÃO
 */

const expressaoAND = true && true && true;
const expressaoOR = false || true || false;

// console.log(true || false);
// console.log(expressaoOR);
// console.log(expressaoAND);
// console.log(true);

const usuario = 'Lucas';
const senha = '1234';

const login = usuario === 'Lucas' && senha === '1234';
console.log(login);
