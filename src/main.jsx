import { createRoot } from "react-dom/client"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import Welcome from "./components/Welcome.jsx"
import Quiz from "./components/Quiz.jsx"
import End from "./components/END.jsx"
import { ScoreProvider } from "./ContextAPI/ScoreContext.jsx"

createRoot(document.getElementById("root")).render(
  <ScoreProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/end" element={<End/>} />
      </Route>
      <Route path="*" element={"Not Found!"} />
    </Routes>
  </BrowserRouter>
  </ScoreProvider>
)
