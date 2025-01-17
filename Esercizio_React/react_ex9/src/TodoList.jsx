import React, { useState, useCallback, useMemo } from "react";
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
    const { todos, loading, error } = useTodos(); // Usa il contesto
    const [searchTerm, setSearchTerm] = useState("");

    // Filtra i to-do usando useMemo
    const filteredTodos = useMemo(() => {
        if (!searchTerm) return todos || [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return todos.filter((todo) =>
            todo.title.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [todos, searchTerm]);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
            />

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && filteredTodos.length > 0 && (
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.title}</strong> -{" "}
                            {todo.completed ? "Completed" : "Not Completed"}
                        </li>
                    ))}
                </ul>
            )}

            {!loading && !error && filteredTodos.length === 0 && <p>No todos found.</p>}
        </div>
    );
};

export default TodoList;
