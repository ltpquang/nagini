import React from "react";
import {Accordion, Dropdown, DropdownButton} from "react-bootstrap";
import BaseTransformer from "../transformers/BaseTransformer";
import Transformer from "../transformers/Manager";
import {forEach} from "react-bootstrap/ElementChildren";

interface Props {
  onNodesChanged?: (engine: TransformEngine) => void
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

    let transformer = Transformer.forName(eventKey)
    if (!transformer) {
      return
    }

    this.addTransformer(transformer.make())
  }

  transform(input: string): string {
    let result = input
    this.state.transformers.forEach((trans, index, _a) => {
      result = trans.process(result)
    })
    return result
  }


  renderNodes() {
    return this.state.transformers.map((trans, index, _a) => trans.render(index))
  }

  renderSupportedNodes(): JSX.Element[] {
    let result: JSX.Element[] = []
    Transformer.all().forEach((value, key, _) => result.push(
        <Dropdown.Item
            as="button"
            key={key}
            eventKey={key}>{value.make().name()}</Dropdown.Item>));
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
