import React from "react";
import {Badge, Button, FloatingLabel, Form, Row} from "react-bootstrap";
import BaseTransformer from "../transformers/BaseTransformer";

interface Props {
}

interface State {
  nodeCount: number;
  output?: string;
  transformers: BaseTransformer[];
}

class Main extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      nodeCount: 0,
      transformers: [],
    };
  }

   handleClick() {
    this.setState({
      nodeCount: this.state.nodeCount + 1,
      output: this.state.nodeCount.toString()
    });
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({
      output: event.currentTarget.value
    });
  }

  renderNodes() {
    let result = [];
    for (let i = 0; i < this.state.nodeCount; i++) {
      result.push(this.renderNode(i));
    }
    return result
  }

  renderNode(index: number) {
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
            onChange={(event) => this.handleInputChange(event)}
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