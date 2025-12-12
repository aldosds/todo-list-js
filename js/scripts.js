document.addEventListener("DOMContentLoaded", () => {
  // Seleciondo os elementos do DOM
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Adicionando um ouvinte de evento ao botão "Adicionar"
  addTaskBtn.addEventListener("click", addTask);

  // Permitindo adicionar tarefa pressionando 'Enter' no campo de input
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Função para adicionar uma nova tarefa
  function addTask() {
    const taskText = taskInput.value.trim();

    // Verifica se o campo de entrada não está vazio
    if (taskText === "") {
      alert("Por favor, digite uma tarefa!");
      return;
    }

    // Criando o novo elemento de lista (<li>)
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">❌</button>
        `;

    // Ao clicar no próprio item da lista (exceto o botão de deletar)
    listItem.addEventListener("click", (event) => {
      // Verificando se o clique não foi no botão de exclusão
      if (!event.target.classList.contains("delete-btn")) {
        listItem.classList.toggle("completed");
      }
    });

    // Adicioando um ouvinte de evento para o botão de exclusão
    const deleteButton = listItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      // Remove o item da lista
      taskList.removeChild(listItem);
    });

    // Adiciona o novo item à lista de tarefas
    taskList.appendChild(listItem);

    // Limpa o campo de entrada
    taskInput.value = "";
  }
});
