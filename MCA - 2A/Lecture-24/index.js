const input = document.querySelector("#todo-input");
const btn = document.querySelector("#todo-add");
const todoList = document.querySelector("#todo-list");
const deleteBtn = document.querySelectorAll(".delete-todo");
const heading = document.querySelector("#main-title");
// btn.onclick = function () {
//     console.log("HEllo World");
// };

// btn.onclick = function () {
//     console.log("Goodbye World");
// };

// btn.addEventListener("click", function () {
//     console.log("Goodbye there");
// });

btn.addEventListener("click", function () {
    // console.log("Hello there");
    // console.log(input.value);
    const todoInput = input.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.textContent = todoInput;
    deleteBtn.classList.add("delete-todo");
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
    });
    newTodo.appendChild(deleteBtn);
    todoList.appendChild(newTodo);

});

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});


// for (let i = 0; i < deleteBtn.length; i++){
//     deleteBtn[i].addEventListener
// }


let i;
for (i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i); }, 1000);
}
// console.log(i);