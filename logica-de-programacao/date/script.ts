/**
 * Date
 */

//const data = new Date(0); 01/01/1970 timestamp unix ou época unix

// const threeHours: number = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const date = new Date(0 + threeHours + oneDay); // função construtora Date

// const randomDate = new Date(1999, 0, 2, 17, 30, 30, 300);
// const data = new Date("1999-01-02 17:30:59");
// console.log("Dia", data.getDate())
// console.log("Mês", data.getMonth()) // Mês começa do zero
// console.log("Ano", data.getMonth())
// console.log("Hora", data.getHours())
// console.log("Minutos", data.getMinutes())
// console.log("Segundos", data.getSeconds())
// console.log("Milissegundos", data.getMilliseconds())
// console.log('Dia da Semana', data.getDay()); // 0 - domingo, 6 - sábado
/**
 * Ano, Mês, Dia, Horas, Minutos, Segundos, Milésimo de Segundo
 */

// console.log(randomDateString.toString());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

  return `${zeroAEsquerda(dia)}/${zeroAEsquerda(mes)}/${ano}  ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}:${zeroAEsquerda(seg)}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
