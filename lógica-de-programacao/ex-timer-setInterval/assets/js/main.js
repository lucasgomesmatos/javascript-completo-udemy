const relogio = document.querySelector('.hora');

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval( function() {
    segundos++;
    relogio.innerHTML = criaSegundos(segundos);
  }, 1000);
}

document.addEventListener('click', function(event) {
  const elemento = event.target;

  if(elemento.classList.contains('iniciar')) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove('pausado');
  }

  if(elemento.classList.contains('pausar')){
    clearInterval(timer);
    relogio.classList.toggle('pausado');
  }

  if(elemento.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
  }
})

function criaSegundos(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    timeZone: 'UTC'
  })

}
