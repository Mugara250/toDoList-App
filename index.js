/* 
1. Create an element called "li"
2. Capture the content of the input element
3. Set that content as the text content of the "li" element
4. Add the "li" element to the end of the tasks element
*/

// selecting the needed buttons
const addTaskButton = document.querySelector(".add-button");
const inputElement = document.querySelector("#task");
const tasksList = document.querySelector(".tasks");


// task creation and addition
addTaskButton.addEventListener('click', function addTask(event) {
    // task creation
    const inputText = inputElement.value;
    const task = document.createElement("li");
    task.className = "added";
    task.style.display = "flex";
    task.style.justifyContent = "space-between";
    task.style.alignItems = "baseline";
    task.textContent = inputText;

    // remove button creation
    const deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.className = "remove";
    deleteButton.textContent = "REMOVE";
    deleteButton.style.backgroundColor = "#1789A3"
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
    // const deleteButton = document.querySelector(".remove");
    deleteButton.addEventListener("click", function removeTask(event) {
        event.preventDefault();
        const task = document.querySelector(".added");
        tasksList.removeChild(task);
    })
})

// // task removal
// const deleteButton = document.querySelector(".remove");
// deleteButton.addEventListener("click", function removeTask(event) {
//     event.preventDefault();
//     const task = document.querySelector(".added");
//     tasksList.removeChild(task);
//     tasksList.removeChild(deleteButton);
// })