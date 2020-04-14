const form = document.querySelector("form");
const todoList = document.querySelector("ul#todo-list");
const all = document.querySelectorAll("ul#todo-list")
const lbl_allthis = document.getElementById("allthis");
const lbl_selected = document.getElementById("selected");
let cont_allthis = 0;
let cont = 0; 

for(task of all){
    task.addEventListener("change",realizada)
}
function realizada(event){
const target = event.target;
if (target.nodeName !== "INPUT") {
    return false;
  }

  if (target.checked) {
    console.log("ahhhhhh")
    cont++;
    console.log(cont);
    lbl_selected.textContent = cont;
    return false;  
  }
  console.log("ohhhhhh");
  cont--;
  console.log(cont);
  lbl_selected.textContent = cont;}

function submitHandler(event) {
  event.preventDefault();

  const task = event.target.task;

  if (!task.value) {
    alert("Task is required!");

    return false;
  }

  createTodo(task.value);

  // clean task content
  event.target.task.value = "";

  // set focus to task input
  event.target.task.focus();
}

function changeHandler(event) {
  const target = event.target;

  if (target.nodeName !== "INPUT") {
    return false;
  }

  if (target.checked) {
    target.previousSibling.style.textDecoration = "line-through";

    return false;
  }

  target.previousSibling.style.textDecoration = "";
}

function createTodo(task) {

  const list = document.createElement("li");
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  const text = document.createTextNode(task);

  checkbox.setAttribute("type", "checkbox");
  cont_allthis++;
  console.log(cont_allthis);

  span.append(text);

  list.append(span);
  list.append(checkbox);

  todoList.append(list);
 lbl_allthis.textContent = cont_allthis;
}


form.addEventListener("submit", submitHandler);
todoList.addEventListener("change", changeHandler);