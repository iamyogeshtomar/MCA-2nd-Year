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

btn.onClick = function () {
  todoList.classList.add("change");
};
