const form = document.querySelector("form");
const todoList = document.querySelector("ul#todo-list");
const all = document.querySelector("a#allthis");

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
    
		renderCompletedTasks();

    return false;
  }

	renderCompletedTasks();

  target.previousSibling.style.textDecoration = "";
}

function createTodo(task) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  const text = document.createTextNode(task);

  checkbox.setAttribute("type", "checkbox");

  span.append(text);

  list.append(span);
  list.append(checkbox);

  todoList.append(list);
  
  renderTasksLength();
}

function renderCompletedTasks() {
  const node = document.querySelector("a#selected");

	node.textContent = +node.textContent + 1;
}

function renderTasksLength() {
	all.textContent = getTasksLength();
}

function getTasksLength() {
    
	return todoList.children.length;
}

form.addEventListener("submit", submitHandler);
todoList.addEventListener("change", changeHandler);