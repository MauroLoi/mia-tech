import { useEffect, useState, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, toggleTodo } from "../store/slice/manageTodos";

const Home = () => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector((state) => state.todos);

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(() => searchParams.get("search") || "");

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
        setSearchParams(event.target.value ? { search: event.target.value } : {});
    }, [setSearchParams]);

    const handleToggle = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && todos.length > 0 ? (
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <Link to={`/todoDetails/${todo.id}`}>
                                <strong>{todo.title}</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos found</p>
            )}
        </div>
    );
};

export default Home;
