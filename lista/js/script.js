//Selecionando o Evento
let campoTarefa = document.querySelector("#campo-tarefa");
let botaoAdiconar = document.querySelector("#botao-adicionar");
let listaTarefas = document.querySelector("#lista-tarefas");

//adicionando o Evento de clique no botão Adicionar
botaoAdiconar.addEventListener("click", adicionarTarefa);

//Adicionando tarefa com a tecla anterior
campoTarefa.addEventListener("keyup", function (enter) {
  if (enter.key === "Enter") {
    adicionarTarefa();
  }
});

//Criando e Adicionando elementos
function adicionarTarefa() {
  if (campoTarefa.value == "") {
    alert("Insira um valor");
    return;
  }

  //Pegar o valor do campo de texto
  let nomeTarefa = campoTarefa.value;
  //Criando um elemento li
  let novaTarefa = document.createElement("li");
  //definindo o conteúdo do elemento li
  novaTarefa.innerText = nomeTarefa;

  //adicionar o item da lista ao final da lista
  listaTarefas.appendChild(novaTarefa);

  //Criar nova classe para li
  novaTarefa.classList = "lista";

  //Adicionar um ouvinte ao item da lista
  novaTarefa.addEventListener("click", function () {
    novaTarefa.classList.toggle("concluída");
  });

  //Removendo Elementos
  //Criar botão excluir
  let botaoExcluir = document.createElement("button");

  //Definir o texto do botão excluir
  botaoExcluir.innerText = "X";

  //Adicionar um ouvinte ao botão excluir
  botaoExcluir.addEventListener("click", function () {
    listaTarefas.removeChild(novaTarefa);
  });

  //Adicionar o item da lista ao final da lista
  listaTarefas.appendChild(novaTarefa);

  //Adicionar o botão excluir
  novaTarefa.appendChild(botaoExcluir);

  //Limpar o campo de texto
  campoTarefa.value = null;

  //Criar classe para o botão
  botaoExcluir.classList = "botao-excluir";
}
