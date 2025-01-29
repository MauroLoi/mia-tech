import { useState, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTodos, toggleTodo } from "../store/slice/manageTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const Home = () => {
    const { data: todos, error, loading } = useFetch(API_URL, { method: "GET" });
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(() => searchParams.get("search") || "");
    const filteredTodos = useFilteredTodos(todos || [], searchTerm);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
        setSearchParams(event.target.value ? { search: event.target.value } : {});
    }, [setSearchParams]);

    if (todos) {
        dispatch(setTodos(todos)); 
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {loading && <p>Loading..</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && todos && (
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <Link to={`/todoDetails/${todo.id}`}>
                                <strong>{todo.title}</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
