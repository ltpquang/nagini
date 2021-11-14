import {Accordion} from "react-bootstrap";
import React from "react";
import {Transformer} from "../transformers/Transformer";
import Replace from "../transformers/Replace";
import { TransformerOptionsEmpty } from "./TransformerOptionsEmpty";
import {TransformerOptionsReplace} from "./TransformerOptionsReplace";

interface Props {
  index: number
  transformer: Transformer
  children?: React.ReactNode
}

export const TransformerNode = (props: Props) => {
  const optionBody = (transformer: Transformer): React.ReactNode => {
    if (transformer instanceof Replace) {
      return <TransformerOptionsReplace transformer={transformer}/>
    } else {
      return <TransformerOptionsEmpty/>
    }
  }

  return (
      <Accordion.Item
          key={props.index.toString()}
          eventKey={props.index.toString()}>
        <Accordion.Header>
          {props.transformer.name()}
        </Accordion.Header>
        <Accordion.Body>
          {optionBody(props.transformer)}
        </Accordion.Body>
      </Accordion.Item>
  );
}
