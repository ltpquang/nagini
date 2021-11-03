import React from "react";
import {Badge, Button, FloatingLabel, Form, Row} from "react-bootstrap";

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      nodeCount: 0,
      output: null,
    }
  }

  handleClick() {
    this.setState({
      nodeCount: this.state.nodeCount + 1,
      output: this.state.nodeCount
    })
  }

  renderNodes() {
    let result = [];
    for (let i = 0; i < this.state.nodeCount; i++) {
      result.push(this.renderNode(i));
    }
    return result
  }

  renderNode(index) {
    return <Row>
      <Badge bg="primary">Num {index}</Badge>
    </Row>
  }

  render() {
    return <div className="Main">
      <FloatingLabel controlId="inputTextArea" label="Input">
        <Form.Control
            as="textarea"
            placeholder="Paste"
            style={{height: '100px'}}
        />
      </FloatingLabel>

      {this.renderNodes()}

      <Button onClick={() => this.handleClick()}>Click</Button>

      <FloatingLabel controlId="outputTextArea" label="Output">
        <Form.Control
            as="textarea"
            placeholder="Paste"
            style={{height: '100px'}}
            value={this.state.output}
        />
      </FloatingLabel>
    </div>
  }
}

export default Main