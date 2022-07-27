const paragrafos = document.querySelectorAll('.paragrafos p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

paragrafos.forEach((paragrafo) => {
  paragrafo.style.backgroundColor = backgroundColorBody;
  paragrafo.style.color = '#fff';
  paragrafo.style.padding = '20px';
})