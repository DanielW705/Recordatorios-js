// Si es clase debe tener la primera letra mayuscula
export class TodoList {
  constructor() {
    this.todos = [];
  }
  nuevoTodo(todo) {
    this.todos.push(todo);
  }
  eliminarTodo(id) {}
  maracarCompletado(id) {}
  eliminarCompletados() {}
}
