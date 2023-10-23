import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./pages/Main"
import Drug from "./pages/Drug"

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/drug" element={<Drug />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
