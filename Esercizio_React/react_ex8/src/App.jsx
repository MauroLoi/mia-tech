import { Routes, Route } from "react-router-dom"

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
    </>
  )
}

export default App
