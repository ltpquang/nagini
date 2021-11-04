import React from "react";
import {
  Accordion,
  Button, FloatingLabel,
  Form
} from "react-bootstrap";
import BaseTransformer from "../transformers/BaseTransformer";
import NoOps from "../transformers/NoOps";

interface Props {
}

interface State {
  output?: string;
  transformers: BaseTransformer[];
  expandedIndex: number;
}

class Main extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      transformers: [],
      expandedIndex: -1
    };
  }

  handleClick() {
    this.setState({
      transformers: [...this.state.transformers, new NoOps()]
    });
    this.setState({
      expandedIndex: this.state.transformers.length - 1
    })
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({
      output: event.currentTarget.value
    });
  }

  renderNodes() {
    return this.state.transformers.map((trans, index, _a) => trans.render(index))
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

      <Accordion defaultActiveKey={this.state.expandedIndex.toString()}>
        {this.renderNodes()}
      </Accordion>

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