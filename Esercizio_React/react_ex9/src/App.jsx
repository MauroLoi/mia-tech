import { TodoProvider } from "./provider/TodoContext"
import TodoList from "./TodoList"


function App() {

  return (
    <>
      <TodoProvider>
        <TodoList/>
      </TodoProvider>
    </>
  )
}

export default App

