import {Container} from 'react-bootstrap';
import './App.css';
import Main from "./pkg/main/Main";

const App = () => (
    <div className="App">
      <Container fluid={"md"}>
        <Main/>
      </Container>
    </div>
);

export default App;