/**
 * && -> false && true -> false "valor mesmo"
 *
 * FALSY
 * (false, 0, '', "", ``, null, undefined, NaN)
 *
 */

// console.log('Lucas' && undefined);

function falaOi() {
  return 'Oi';
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());

// retorna o primeiro valor verdadeiro
console.log(0 || false || null || 'Lucas' || true);
