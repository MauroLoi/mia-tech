import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../store/slice/manageTodos";

const TodoDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const todo = useSelector((state) =>
        state.todos.todos.find((todo) => todo.id === Number(id))
    );

    if (!todo) return <p>No todos found</p>;

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    return (
        <div>
            <h2>Details</h2>
            <p>Title: {todo.title}</p>
            <p>To-do ID: {todo.id}</p>
            <p>Completed: {todo.completed.toString()}</p>
            <button onClick={handleToggle}>
                {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
        </div>
    );
};

export default TodoDetails;

