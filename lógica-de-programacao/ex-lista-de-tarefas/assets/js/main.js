const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnButton = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');



function addTarefa() {
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
}

function addTarefaKey(e) {
  if(e.keyCode === 13 ) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
}

function removerTarefa(e) {
  const elemento = e.target;
  if(elemento.classList.contains('apagar')){
    elemento.parentElement.remove();
    salvarTarefas();
  }
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar);
}

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  inputTarefa.value = '';
  criaBotaoApagar(li);
  salvarTarefas();
}

btnButton.addEventListener('click', addTarefa);
inputTarefa.addEventListener('keypress', addTarefaKey)
document.addEventListener('click', removerTarefa)


function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for( let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionarTarefasSalvas();
