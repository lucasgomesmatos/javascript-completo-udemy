/**
 * Exercício Switch Case
 */

getDataHorario();

setInterval(getDataHorario, 1000);

function getDataHorario() {
  const dataHorario = document.querySelector(".horario");
  const data = new Date();

  const dia = data.getDate();
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minutos = data.getMinutes();

  const diaSemana = data.getDay();
  const mes = data.getMonth() + 1;

  const resultadoSemana = getDia(diaSemana);
  const resultadoMes = getMes(mes);

  dataHorario.innerHTML = `<h1>${resultadoSemana}, ${dia} de ${resultadoMes} de ${ano}</h1> <h1>${hora}:${minutos}</h1>`;
  
}

function getDia(data) {
  switch (data) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-Feira";
    case 2:
      return "Terça-Feira";
    case 3:
      return "Quarta-Feira";
    case 4:
      return "Quinta-Feira";
    case 5:
      return "Sexta-Feira";
    case 6:
      return "Sábado";
    default:
      return "Erro";
  }
}

function getMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Erro";
  }
}