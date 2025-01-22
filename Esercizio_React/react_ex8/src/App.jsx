import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
