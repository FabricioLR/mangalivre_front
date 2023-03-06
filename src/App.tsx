import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Information from "./pages/information/Information"
import Reader from "./pages/reader/Reader"
import "./app.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reader" element={<Reader/>}/>
            <Route path="/information" element={<Information/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
