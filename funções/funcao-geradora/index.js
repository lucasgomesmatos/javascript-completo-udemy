function* geradora1() {
  yield 'Valor 1';
  yield 'Valor 2';
  yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

for(let valor of g1) {
  console.log(valor);
}

function* contador() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const cont = contador();

console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);