import './App.css'
import Main from "./pkg/ui/Main.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import {createTheme, ThemeProvider} from "@mui/material";
import {amber} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: amber
  }
})

function App() {
  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/nagini" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App
