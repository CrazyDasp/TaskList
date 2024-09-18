localStorage.getItem("tasks")

document.addEventListener("DOMContentLoaded", () => {
  
const taskInput = document.querySelector(".tasks__input");
const addButton = document.querySelector("button");
const tasks = document.querySelector(".tasks")

addButton.addEventListener("click", (event) => {
  
  event.preventDefault();
  
  const newDiv = document.createElement("div");
  newDiv.classList.add("task");
  tasks.appendChild(newDiv)
  
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = taskInput.value;
  taskInput.value = "";
  newDiv.appendChild(taskTitle);
  
  const taskRemove = document.createElement("a");
  taskRemove.href = "#";
  taskRemove.classList.add("task__remove");
  taskRemove.innerHTML = "&times;";
  newDiv.appendChild(taskRemove);
  
 localStorage.setItem("tasks", newDiv)
  
  taskRemove.addEventListener("click", (event) => {
    
    event.preventDefault();

    const parRemove = taskRemove.closest(".task");
    parRemove.remove();
});
});
});
