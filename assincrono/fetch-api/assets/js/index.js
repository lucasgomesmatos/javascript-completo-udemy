document.addEventListener("click", (e) => {
  e.preventDefault();
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute("href");

  fetch(href)
    .then(response => response.text())
    .then(html => carregaResultado(html))
    .catch(e => console.log(e))
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
