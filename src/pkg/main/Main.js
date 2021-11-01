import React from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props = {

    }
  }

  render() {
    return <div className="Main">
      <FloatingLabel controlId="inputTextArea" label="Input">
        <Form.Control
            as="textarea"
            placeholder="Paste"
            style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Button>Click</Button>

      <FloatingLabel controlId="outputTextArea" label="Output">
        <Form.Control
            as="textarea"
            placeholder="Paste"
            style={{ height: '100px' }}
        />
      </FloatingLabel>
    </div>
  }
}

export default Main