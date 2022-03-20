import {Container} from 'react-bootstrap';
import './App.css';
import Main from "./pkg/ui/Main";
import {Route, Routes, BrowserRouter} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Routes>
            <Route path="/nagini" element={<Main/>}/>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
);

export default App;
