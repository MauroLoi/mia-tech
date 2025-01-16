import { useState, useEffect } from "react";

export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredTodos(todos);
        } else {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const filtered = todos.filter(todo =>
                todo.title.toLowerCase().includes(lowerCaseSearchTerm)
            );
            setFilteredTodos(filtered);
        }
    }, [todos, searchTerm]);

    return filteredTodos;
}; 
