import {Accordion} from "react-bootstrap";
import React from "react";

class BaseTransformer {
  process(input: string): string {
    throw new Error("Not implemented");
  }

  name(): string {
    throw new Error("Not implemented");
  }

  buttonOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
  }

  render = (index: number) =>
      <Accordion.Item
          key={index.toString()}
          eventKey={index.toString()}>
        <Accordion.Header>
          {this.name()}
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>;
}

export default BaseTransformer
