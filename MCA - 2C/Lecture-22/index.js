const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const heading = document.querySelector("h1");
const todos = document.querySelectorAll(".todos");
const deleteBtn = document.querySelectorAll(".delete-todo");

// addBtn.onclick = function (){
//     console.log("HEllo World");
// }
// addBtn.onclick = function (){
//     console.log("Goodbye World");
// }

addBtn.addEventListener("click", () => {
    // const newTodo = input.value;
    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    newItem.classList.add("todos");
    newItem.appendChild(deleteBtn);
    todoList.appendChild(newItem);
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
        // console.log(e);
    });
    // console.log(newItem);
});

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});