import { useState, useCallback, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";


const API_URL = "https://jsonplaceholder.typicode.com/todos"

const TodoList = () => {
    const { data: todos, error, loading } = useFetch(API_URL, { method: "GET" })
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    const filteredTodos = useMemo(() => {
        if (!searchTerm) return todos || [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (todos || []).filter((todo) =>
            todo.title.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [todos, searchTerm]);

    return (
        <div>
            <input type="text" placeholder="Search todos..." value={searchTerm} onChange={handleSearchChange} />
            {loading && <p>Loading..</p>}
            {error && <p>Error:</p>}

            {!loading && !error && todos && (
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.title}</strong> 
                        </li>
                    ))}
                </ul>
            )}
            {!loading && !error && todos && todos.length === 0 && <p>{error.message}</p>}
        </div>
    )
}

export default TodoList