import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Quiz from "./components/Quiz"
import { Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App
