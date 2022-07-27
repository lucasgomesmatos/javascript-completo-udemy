function mostraHora() {
  const data = new Date();
  return data.toLocaleTimeString('pt-BR', {
  });
}


const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

setTimeout( () => {
  clearInterval(timer);
}, 10000)