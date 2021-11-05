import React from "react";
import {Accordion, Dropdown, DropdownButton} from "react-bootstrap";
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
  transformers: BaseTransformer[];
}

class TransformEngine extends React.Component<Props, State>{
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      transformers: []
    };
  }

  addTransformer(input: BaseTransformer) {
    this.setState({
      transformers: [...this.state.transformers, input]
    });
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


  renderNodes() {
    return this.state.transformers.map((trans, index, _a) => trans.render(index))
  }

  renderSupportedNodes(): JSX.Element[] {
    let result: JSX.Element[] = []
    supportedNode.forEach((value, key, _) => result.push(
        <Dropdown.Item as="button" eventKey={key}>{key}</Dropdown.Item>));
    return result
  }

  render() {
    return <div>
      <Accordion>
        {this.renderNodes()}
      </Accordion>

      <DropdownButton id="dropdown-item-button" title="Add node"
                      onSelect={(eventKey) => this.handleAddNode(eventKey)}>
        {this.renderSupportedNodes()}
      </DropdownButton>
    </div>
  }
}

export default TransformEngine
