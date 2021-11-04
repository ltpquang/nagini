import React from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import BaseTransformer from "../transformers/BaseTransformer";
import NoOps from "../transformers/NoOps";

interface Props {
}

interface State {
  output?: string;
  transformers: BaseTransformer[];
}

class Main extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      transformers: [],
    };
  }

  handleClick() {
    this.setState({
      transformers: [...this.state.transformers, new NoOps()]
    });
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({
      output: event.currentTarget.value
    });
  }

  renderNodes() {
    return this.state.transformers.map((trans, _i, _a) => trans.render())
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