import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) throw new Error("Errore durante il caricamento dei to-do");
                const data = await response.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos deve essere utilizzato all'interno di un TodoProvider");
    }
    return context;
};
