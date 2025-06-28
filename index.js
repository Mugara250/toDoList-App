// selecting the needed elements
const userInput = document.querySelector("#task");
const addButton = document.querySelector("#add-btn");
const todos = document.querySelector("#todos");

// adding the event listener to the add button
addButton.addEventListener('click', () => {
  const todo = document.createElement("li");
  todo.innerHTML = `${userInput.value} <a href="#" id="remove-btn" ><button type="button" id="remove">REMOVE</button></a>`;
  todos.appendChild(todo);
})