import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';


function gerar() {
  const gera = new GeraCPF()
  const cpfGerado = document.querySelector('.resultado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
}  

document.addEventListener('click', (e)=> {
  e.preventDefault();
  const el = e.target;
  console.log(e.target)

  if(el.classList.contains('button')){
    gerar();
  }
})
