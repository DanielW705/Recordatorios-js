// Si es clase debe tener la primera letra mayuscula
export class TodoList {
  constructor() {
    this.todos = [];
  }
  nuevoTodo(todo) {
    this.todos.push(todo);
  }
  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }
  maracarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
      }
    }
  }
  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
  }
}
