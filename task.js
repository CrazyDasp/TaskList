const taskInput = document.querySelector(".tasks__input");
const addButton = document.querySelector("button");
const tasksList = document.querySelector(".tasks__list")
const taskRemove = document.querySelectorAll(".task__remove")

addButton.addEventListener("click", (event) => {

  event.preventDefault();

  const title = taskInput.value;

  if (title.trim() != "") {
    tasksList.insertAdjacentHTML("afterbegin", `
    <div class="task">
      <div class="task__title">
        ${title.trim( )}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `);

    taskInput.value = "";

    const task = tasksList.querySelector(".task");

    const taskRemove = task.querySelector(".task__remove");

    taskRemove.addEventListener("click", (event) => {

    event.preventDefault();

    const parRemove = taskRemove.closest(".task");
    parRemove.remove();
  });
} else {
  taskInput.value = "";
};
});
