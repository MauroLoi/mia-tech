import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useTodos } from "./provider/TodoContext";


const TodoList = () => {
    const { todos, loading, error } = useTodos();
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

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" placeholder="Search todos..." value={searchTerm} onChange={handleSearchChange} ref={inputRef} />
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