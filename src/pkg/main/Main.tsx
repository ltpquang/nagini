import React, {FunctionComponent} from "react";
import {Accordion, Button, Card, FloatingLabel, Form, useAccordionButton} from "react-bootstrap";
import BaseTransformer from "../transformers/BaseTransformer";
import NoOps from "../transformers/NoOps";

interface Props {
}

interface State {
  output?: string;
  transformers: BaseTransformer[];
}

interface CustomToggleProps {
  eventKey: string
}

const CustomToggle: FunctionComponent<CustomToggleProps> = ({eventKey, children}) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
  );

  return (
      <button
          type="button"
          style={{backgroundColor: 'pink'}}
          onClick={decoratedOnClick}
      >
        {children}
      </button>
  );
}

// function CustomToggle(children: React.ReactNode, eventKey: string) {
//   const decoratedOnClick = useAccordionButton(eventKey, () =>
//       console.log('totally custom!'),
//   );
//
//   return (
//       <button
//           type="button"
//           style={{ backgroundColor: 'pink' }}
//           onClick={decoratedOnClick}
//       >
//         {children}
//       </button>
//   );
// }

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

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

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