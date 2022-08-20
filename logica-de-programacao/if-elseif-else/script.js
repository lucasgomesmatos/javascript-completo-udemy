/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 */

const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');
} else {
  console.log('Olá');
}

const tenhoDinheiro = 0;

if (tenhoDinheiro) {
  console.log('Vou sair de casa');
} else {
  console.log('Não vou sair de casa');
}

const numero = 8;

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5');
} else if (1 === 1) {
  console.log('Literal');
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8');
} else {
  console.log('O número não está entre 0 e 8');
}
