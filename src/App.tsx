import {Col, Container, Row} from 'react-bootstrap';
import './App.css';
import Main from "./pkg/main/Main";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Main/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
