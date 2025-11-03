// const todoList = document.getElementById("todo-list");
// const h1 = document.getElementsByTagName("h1");
// const todoItems = document.getElementsByClassName("todo-item");

const todoList = document.querySelector("#todo-list");
const todoItems = document.querySelectorAll(".todo-item");
const todoHeading = document.querySelector("#todo-heading");
const addTodo = document.querySelector("#add-todo");
const inputTodo = document.querySelector("#todo-input");
const deleteBtn = document.querySelectorAll(".delete-todo");

// addTodo.onclick = function () {
//     console.log("Hello World");
// };
// addTodo.onclick = function () {
//     console.log("Goodbye World");
// };

addTodo.addEventListener("click", function () {
    // console.log("Hello World");
    // console.log(inputValue);
    const inputValue = inputTodo.value;
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.textContent = inputValue;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");
    deleteBtn.textContent = "X";
    todoList.appendChild(newTodo);
    newTodo.appendChild(deleteBtn);

    // 2nd approach
    // const newTodo = `<li class="todo-item">${inputValue}<button class="delete-todo">X</button></li>`;
    // newTodo + todoList.innerHTML;
});

// const arr = [123, 13234.234, 245, 3456, 3456, 3456, 2345, 3456, 456, 235];
// for (let i = 0; i < arr.length; i++){
//     let newArr = new Array();
//     newArr.push(arr[i]);
// }

// const newArr = arr.map((item, index) => { return item * 2; });

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});