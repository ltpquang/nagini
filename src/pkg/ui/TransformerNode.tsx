import {Accordion} from "react-bootstrap";
import React from "react";
import {Transformer} from "../transformers/Transformer";

interface Props {
  index: number
  transformer: Transformer
}

export const TransformerNode = ({index, transformer}: Props) => {
  return (
      <Accordion.Item
          key={index.toString()}
          eventKey={index.toString()}>
        <Accordion.Header>
          {transformer.name()}
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
      </Accordion.Item>
  );
}
