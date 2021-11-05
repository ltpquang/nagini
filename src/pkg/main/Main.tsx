import React from "react";
import {FloatingLabel, Form} from "react-bootstrap";
import TransformEngine from "../engine/TransformEngine";

interface Props {
}

interface State {
  output?: string;
}

class Main extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {};
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({
      output: event.currentTarget.value
    });
  }

  render = () =>
      <div className="Main">
        <FloatingLabel controlId="inputTextArea" label="Input">
          <Form.Control
              as="textarea"
              placeholder="Paste"
              style={{height: '100px'}}
              onChange={(event) => this.handleInputChange(event)}
          />
        </FloatingLabel>
        <TransformEngine/>
        <FloatingLabel controlId="outputTextArea" label="Output">
          <Form.Control
              as="textarea"
              placeholder="Paste"
              style={{height: '100px'}}
              value={this.state.output}
          />
        </FloatingLabel>
      </div>;
}

export default Main