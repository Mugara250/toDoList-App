// selecting the needed buttons
const addTaskButton = document.querySelector(".add-button");
const inputElement = document.querySelector("#task");
const tasksList = document.querySelector(".tasks");

// adding the keypress event when the "Enter" key is clicked
inputElement.addEventListener("keydown", function taskAdd(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    // task creation
    const inputText = inputElement.value;
    const task = document.createElement("li");
    task.style.display = "flex";
    task.style.justifyContent = "space-between";
    task.style.alignItems = "baseline";
    task.textContent = inputText;

    // remove button creation
    const deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.className = "remove";
    deleteButton.textContent = "REMOVE";
    deleteButton.style.backgroundColor = "#1789A3";
    deleteButton.style.paddingTop = "0.75rem";
    deleteButton.style.paddingBottom = "0.75rem";
    deleteButton.style.paddingLeft = "1.25rem";
    deleteButton.style.paddingRight = "1.25rem";
    deleteButton.style.fontWeight = "bold";
    deleteButton.style.borderRadius = "1rem";

    // addition of the task and remove button
    task.appendChild(deleteButton);
    tasksList.appendChild(task);
    inputElement.value = "";

    // task removal
    deleteButton.addEventListener("click", function removeTask(event) {
      event.preventDefault();
      const task = document.querySelector("li");
      tasksList.removeChild(task);
    });
  }
});
// task creation and addition
addTaskButton.addEventListener("click", function addTask(event) {
  // task creation
  const inputText = inputElement.value;
  const task = document.createElement("li");
  // task.className = "added";
  task.style.display = "flex";
  task.style.justifyContent = "space-between";
  task.style.alignItems = "baseline";
  task.textContent = inputText;

  // remove button creation
  const deleteButton = document.createElement("a");
  deleteButton.href = "#";
  deleteButton.className = "remove";
  deleteButton.textContent = "REMOVE";
  deleteButton.style.backgroundColor = "#1789A3";
  deleteButton.style.paddingTop = "0.75rem";
  deleteButton.style.paddingBottom = "0.75rem";
  deleteButton.style.paddingLeft = "1.25rem";
  deleteButton.style.paddingRight = "1.25rem";
  deleteButton.style.fontWeight = "bold";
  deleteButton.style.borderRadius = "1rem";

  // addition of the task and remove button
  task.appendChild(deleteButton);
  tasksList.appendChild(task);
  inputElement.value = "";

  // task removal
  deleteButton.addEventListener("click", function removeTask(event) {
    event.preventDefault();
    const task = document.querySelector("li");
    tasksList.removeChild(task);
  });
});
