import { Routes, Route } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import Layout from "./Layouts/Layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
