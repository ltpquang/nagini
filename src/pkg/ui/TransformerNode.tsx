import {Accordion, Button, Col, OverlayTrigger, Popover, Row} from "react-bootstrap";
import React from "react";
import {StringTransformer} from "../base/StringTransformer";
import Replace from "../transformers/Replace";
import {TransformerOptionsEmpty} from "./TransformerOptionsEmpty";
import {TransformerOptionsReplace} from "./TransformerOptionsReplace";
import JsonPath from "../transformers/JsonPath";
import {TransformerOptionsJsonPath} from "./TransformerOptionsJsonPath";
import {Trash} from "react-bootstrap-icons";
import JsonBeautify from "../transformers/JsonBeautify";
import {TransformerOptionsJsonBeautify} from "./TransformerOptionsJsonBeautify";
import Unescape from "../transformers/Unescape";
import {TransformerOptionsUnescape} from "./TransformerOptionsUnescape";

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
    } else if (transformer instanceof JsonBeautify) {
      return <TransformerOptionsJsonBeautify
          transformer={transformer}
          onChange={(transformer) => props.onChange?.(props.index, transformer)}
      />
    } else if (transformer instanceof Unescape) {
      return <TransformerOptionsUnescape />
    } else {
      return <TransformerOptionsEmpty/>
    }
  }

  const handleRemove = () => {
    document.body.click()
    if (props.onRemove) {
      props.onRemove(props.index)
    }
  }

  const renderOverlay = (onClick: () => void) => (
      <Popover id="popover-basic">
        <Popover.Body>
          <Button variant="danger"
                  onClick={() => onClick()}>
            Yes, delete!
          </Button>
        </Popover.Body>
      </Popover>
  );

  return (
      <Row className="mt-3">
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
          <OverlayTrigger
              trigger="click"
              rootClose
              placement="right"
              overlay={renderOverlay(handleRemove)}
          >
            <Button
                variant="danger"
                className="mt-2"><Trash/></Button>
          </OverlayTrigger>
        </Col>
      </Row>
  );
}
