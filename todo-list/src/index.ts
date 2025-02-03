import { Todo } from "./types";

const todos: Todo[] = []; 

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, 
        title,
        completed: false
    };

    todos.push(newTodo); 
    return newTodo;
}

console.log(addTodo("Prima attività"));
console.log(addTodo("Seconda attività"));
console.log(todos); 



