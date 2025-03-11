import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Quiz from "./components/Quiz"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Quiz />
    </div>
  )
}

export default App
