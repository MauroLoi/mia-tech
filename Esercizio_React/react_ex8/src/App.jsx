import { Routes, Route, Link } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import TodoDetails from "./pages/TodoDetails"
import Layout from "./layouts/Layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todoDetails/:id" element={<TodoDetails />} />
        </Route>
      </Routes>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
