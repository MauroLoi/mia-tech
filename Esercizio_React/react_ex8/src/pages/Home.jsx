import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { useCallback } from "react";
import { Link } from "react-router-dom"

const API_URL = "https://jsonplaceholder.typicode.com/todos"

const Home = () => {
    const { data: todos, error, loading } = useFetch(API_URL, { method: "GET" })
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTodos = useFilteredTodos(todos || [], searchTerm);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    return (
        <div>
            <input type="text" placeholder="Search todos..." value={searchTerm} onChange={handleSearchChange} />
            {loading && <p>Loading..</p>}
            {error && <p>Error:</p>}

            {!loading && !error && todos && (
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <Link to={`/todoDetails/${todo.id}`}><strong>{todo.title}</strong></Link>
                        </li>
                    ))}
                </ul>
            )}
            {!loading && !error && todos && todos.length === 0 && <p>{error.message}</p>}
        </div>
    )
}

export default Home