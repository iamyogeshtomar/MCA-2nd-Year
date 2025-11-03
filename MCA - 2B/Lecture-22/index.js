// // document.getElementById()
// // document.getElementsByClassName()
// // document.getElementsByTagName()

// const listItems = document.querySelectorAll(".items");
// // const btn = document.querySelector("#sample");
// const list = document.querySelector("#main-list");

// // document.querySelector("#sample").addEventListener()

// // btn.addEventListener("click", function () {
// //   list.classList.add("change");
// // });

const todoList = document.querySelector("#todo-list");
const btn = document.querySelector("#add-todo");
const todoInput = document.querySelector("#todo-input");
const heading = document.querySelector("#main-title");
const deleteBtn = document.querySelectorAll(".delete-todo");

// btn.onclick = function () {
//   // todoList.classList.add("change");
//   console.log("Hello World!!!");
// };
// btn.onclick = function () {
//   // todoList.classList.add("change");
//   console.log("Goodbye World!!!");
// };

// heading.innerHTML = "<i>HEllo World</i>";
// heading.textContent= "<i>Hello World</i>"

btn.addEventListener("click", () => {
  // console.log(todoInput.value);
  const todoTask = todoInput.value;
  const newTodo = document.createElement("li");
  newTodo.classList.add("tasks");
  const deleteBtn = document.createElement("button");
  newTodo.textContent = todoTask;
  deleteBtn.textContent = "X";
  todoList.appendChild(newTodo);
  newTodo.appendChild(deleteBtn);
});

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });
});