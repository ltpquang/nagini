import {Accordion, Button, Col, Row} from "react-bootstrap";
import React from "react";
import {StringTransformer} from "../base/StringTransformer";
import Replace from "../transformers/Replace";
import {TransformerOptionsEmpty} from "./TransformerOptionsEmpty";
import {TransformerOptionsReplace} from "./TransformerOptionsReplace";
import JsonPath from "../transformers/JsonPath";
import {TransformerOptionsJsonPath} from "./TransformerOptionsJsonPath";
import {Trash} from "react-bootstrap-icons";

interface Props {
  index: number
  transformer: StringTransformer
  onChange?: (index: number, updated: StringTransformer) => void
  onRemove?: (index: number) => void
}

export const TransformerNode = (props: Props) => {
  const renderOptionBody = (transformer: StringTransformer): React.ReactNode => {
    if (transformer instanceof Replace) {
      return <TransformerOptionsReplace
          transformer={transformer}
          onChange={(transformer) => props.onChange?.(props.index, transformer)}
      />
    } else if (transformer instanceof JsonPath) {
      return <TransformerOptionsJsonPath
          transformer={transformer}
          onChange={(transformer) => props.onChange?.(props.index, transformer)}
      />
    } else {
      return <TransformerOptionsEmpty/>
    }
  }

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onRemove) {
      props.onRemove(props.index)
    }
  }

  return (
      <Row>
        <Col md={{span: 11}}>
          <Accordion.Item
              key={props.index.toString()}
              eventKey={props.index.toString()}>
            <Accordion.Header>
              {props.transformer.name()}
            </Accordion.Header>
            <Accordion.Body>
              {renderOptionBody(props.transformer)}
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col md={{span: 1}}>
          <Button variant="danger" onClick={(e) => handleRemove(e)}><Trash/></Button>
        </Col>
      </Row>
  );
}
