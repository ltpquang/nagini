import {Accordion} from "react-bootstrap";
import React from "react";
import {StringTransformer} from "../base/StringTransformer";
import Replace from "../transformers/Replace";
import { TransformerOptionsEmpty } from "./TransformerOptionsEmpty";
import {TransformerOptionsReplace} from "./TransformerOptionsReplace";

interface Props {
  index: number
  transformer: StringTransformer
  children?: React.ReactNode
  onChange?: (index: number, updated: StringTransformer) => void
}

export const TransformerNode = (props: Props) => {
  const optionBody = (transformer: StringTransformer): React.ReactNode => {
    if (transformer instanceof Replace) {
      return <TransformerOptionsReplace
          transformer={transformer}
          onChange={(transformer) => props.onChange?.(props.index, transformer)}
      />
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
