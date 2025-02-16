import { Todo, Project, TodoStatus, PartialTodo, TodoRecord } from "./types";
import User from "./user";
import { filterTodos } from "./utils";

const todos: Todo[] = [];

function addTodo(title: string, metadata?: string | object): Todo {   
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

function updatePartialTodo(todoId: number, updates: PartialTodo): void {
  const todo = todos.find((t) => t.id === todoId);
  if (!todo) {
    throw new Error(`Todo con ID ${todoId} non trovato.`);
  }

  Object.assign(todo, updates); 
}

function convertArrayToRecord(todos: Todo[]): TodoRecord {
  const record: TodoRecord = {};
  todos.forEach((todo) => {
    record[todo.id] = todo; 
  });
  return record;
}


const user1 = new User(1, "Marco", "marco@gmail.com");
const user2 = new User(2, "Andrea", "andrea@gmail.com");

const todo1 = addTodo("Fare la spesa");
updatePartialTodo(todo1.id, { title: "Fare la spesa e comprare frutta", completed: true });

const todo2 = addTodo("Leggere un libro");
const todo3 = addTodo("Andare in palestra");

updateTodoStatus(todo2.id, TodoStatus.InProgress);
updateTodoStatus(todo3.id, TodoStatus.Completed);

user1.addTodo(todo1);
user1.addTodo(todo2);
user2.addTodo(todo3);

console.log(user1);
console.log(user2);

const incompletedTodos = filterTodos(todos, (todo) => todo.status !== TodoStatus.Completed);

console.log("Todos incompletati:", incompletedTodos);

const todoRecord = convertArrayToRecord(todos);

console.log(todoRecord);





