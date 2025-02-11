import { Todo, User, Project, TodoStatus } from "./types";

const todos: Todo[] = [];

function addTodo(title: string, metadata?: string | object): Todo {   // Prima metadata accettava il parametro "any". (  metadata?: any  )
	const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false,
    status: TodoStatus.Pending,
    metadata,
  };

  todos.push(newTodo);
  return newTodo;
}

function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find((t) => t.id === todoId);
  if (!todo) {
    error(`Todo con ID ${todoId} non trovato.`);
  }

  todo.userId = userId;
}

function getUserTodos(userId: number): Todo[] {
  return todos.filter((todo) => todo.userId === userId);
}

function error(message: string): never {
  throw new Error(message);
}

function parseInput(input: unknown): string {
  if (typeof input === "string") {
    return input;
  } else if (typeof input === "number") {
    return input.toString();
  } else {
    error("Tipo di input non valido");
  }
}

function updateTodo(todoId: number, updates: Partial<Todo>): void {
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    error(`Todo con ID ${todoId} non trovato.`);
  }

  Object.assign(todo, updates);
}

function getTodoSummary(todoId: number): [string, boolean] {
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) return error(`Todo con ID ${todoId} non trovato.`);
  return [todo.title, todo.completed];
}

function createProject(name: string, users: User[], todos: Todo[]): Project {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    users,
    todos,
  };
}

function updateTodoStatus(todoId: number, status: TodoStatus): void {
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    error(`Todo con ID ${todoId} non trovato.`);
  }

  todo.status = status;
}

const todo1 = addTodo("Prima attività");
const todo2 = addTodo("Seconda attività");
console.log("Todos dopo l'aggiunta:", todos);

const user1: User = { id: 1, name: "Marco", email: "marco@gmail.com", todos: [] as readonly Todo[] };
const user2: User = { id: 2, name: "Andrea", email: "andrea@gmail.com", todos: [] as readonly Todo[] };

assignTodoToUser(todo1.id, user1.id);
assignTodoToUser(todo2.id, user2.id);
console.log("Todos dopo l'assegnazione:", todos);

updateTodo(todo1.id, { completed: true, metadata: "Completato con successo" });
console.log("Todos dopo l'aggiornamento:", todos);

updateTodoStatus(todo1.id, TodoStatus.Completed);
console.log("Todos dopo il cambio di stato:", todos);

console.log(getTodoSummary(todo1.id));
console.log(getUserTodos(user1.id));

const project1 = createProject("Nuovo Progetto", [user1, user2], todos);
console.log("Progetto creato:", project1);






