import './App.css'
import Main from "./pkg/ui/Main.tsx";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nagini" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
