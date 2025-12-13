const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">❌</button>
        `;

  listItem.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-btn")) {
      listItem.classList.toggle("completed");
    }
  });

  const deleteButton = listItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);

  taskInput.value = "";
}
