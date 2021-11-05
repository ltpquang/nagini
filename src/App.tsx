import {Col, Container, Row} from 'react-bootstrap';
import './App.css';
import Main from "./pkg/main/Main";

function App() {
  return (
    <div className="App">
      <Container fluid={"md"}>
        <Main/>
      </Container>
    </div>
  );
}

export default App;
