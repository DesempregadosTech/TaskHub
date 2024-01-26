import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Servicos from "./pages/Servicos/Servicos";
import Precos from "./pages/Precos/Precos";
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/servicos" element={<Servicos/>}/>
          <Route path="/servicos" element={<Precos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App