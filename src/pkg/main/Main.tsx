import React from "react";
import {Accordion, Dropdown, DropdownButton, FloatingLabel, Form} from "react-bootstrap";
import BaseTransformer from "../transformers/BaseTransformer";
import NoOps from "../transformers/NoOps";
import Unescape from "../transformers/Unescape";

let supportedNode: Map<string, () => BaseTransformer> = new Map([
  ["noops", () => new NoOps()],
  ["unescape", () => new Unescape()]
])

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

  addTransformer(input: BaseTransformer) {
    this.setState({
      transformers: [...this.state.transformers, input]
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

  renderSupportedNodes(): JSX.Element[] {
    let result: JSX.Element[] = []
    supportedNode.forEach((value, key, _) => result.push(
        <Dropdown.Item as="button" eventKey={key}>{key}</Dropdown.Item>));
    return result
  }

  handleAddNode(eventKey: string | null) {
    if (eventKey == null) {
      return
    }
    let maker = supportedNode.get(eventKey)
    if (!maker) {
      return
    }
    this.addTransformer(maker())
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

      <DropdownButton id="dropdown-item-button" title="Add node"
                      onSelect={(eventKey) => this.handleAddNode(eventKey)}>
        {this.renderSupportedNodes()}
      </DropdownButton>

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
}

export default Main