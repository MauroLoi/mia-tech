import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const TodoDetails = () => {
    const params = useParams();

    const [todo, setTodo] = useState();

    const fetchTodo = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            if (!response.ok) {
                throw new Error("Error during fetch data.");
            }

            const result = await response.json();

            setTodo(result)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchTodo()
    }, []);

    return (
        <>
            {todo &&
                <div>
                    <h2>Details</h2>
                    <p>Title: {todo.title}</p>
                    <p>To do ID: {todo.id}</p>
                    <p>completed: {todo.completed.toString()}</p>
                </div>
            }
        </>
    )
}

export default TodoDetails