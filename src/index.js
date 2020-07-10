// import { saludar } from "./js/componentes.js";
import "./style.css";
import { Todo, TodoList } from "./classes";
// import { Todo } from "./classes/todo.class.js";
// import { TodoList } from "./classes/todo-list.class.js";
const todoList = new TodoList();
const tarea = new Todo("Aprender JavaScript");
todoList.nuevoTodo(tarea);
console.log(todoList);
