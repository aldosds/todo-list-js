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

  const taskTextP = document.createElement("p");
  taskTextP.innerText = taskText;
  taskTextP.classList.add("task-text-content");

  const checkedButton = document.createElement("button");
  checkedButton.classList.add("checked-btn");
  checkedButton.innerHTML = "✅";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = "❌";

  listItem.appendChild(taskTextP);
  listItem.appendChild(checkedButton);
  listItem.appendChild(deleteButton);

  checkedButton.addEventListener("click", () => {
    taskTextP.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);

  taskInput.value = "";
  taskInput.focus();
}
