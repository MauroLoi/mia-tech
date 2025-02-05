import { Todo, User } from "./types";

const todos: Todo[] = []; 

const users: User[] = [ 
    { id: 1, name: "Marco", email: "marco@gmail.com" },
    { id: 2, name: "Andrea", email: "andrea@gmail.com" },
];

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, 
        title,
        completed: false
    };

    todos.push(newTodo); 
    return newTodo;
}

function assignTodoToUser(todoId: number, userId: number): void {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.userId = userId;
    }
}

function getUserTodos(userId: number): Todo[] {
    return todos.filter(todo => todo.userId === userId);
}

const todo1 = addTodo("Prima attività");
const todo2 = addTodo("Seconda attività");

assignTodoToUser(todo1.id, 1); 
assignTodoToUser(todo2.id, 2); 


console.log(todos); 
console.log(getUserTodos(1)); 






