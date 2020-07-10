import { crearTodoHtml } from "./js/componentes.js";
import "./style.css";
import { Todo, TodoList } from "./classes";
// import { Todo } from "./classes/todo.class.js";
// import { TodoList } from "./classes/todo-list.class.js";
export const todoList = new TodoList();
// const tarea = new Todo("Aprender JavaScript");
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);
// Manera 1 de hacerlo
todoList.todos.forEach((todo) => crearTodoHtml(todo));
// Manera dos de hacerlo
// todoList.todos.forEach(crearTodoHtml);