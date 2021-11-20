import React from "react";
import JsonBeautify from "../transformers/JsonBeautify";
import Toggle from "react-toggle";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {InfoCircle} from "react-bootstrap-icons";

interface Props {
  transformer: JsonBeautify
  onChange?: (updated: JsonBeautify) => void
}

export const TransformerOptionsJsonBeautify = ({transformer, onChange}: Props) => {
  const setPermissive = (input: Partial<JsonBeautify>) => {
    if (onChange) {
      onChange(JsonBeautify.fromPartial(input))
    }
  }

  return (
      <Row>
        <Col>
          <div>
            Permissive
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Try to parse malformed JSON permissively, may NOT keep the JSON
                  original's structure</Tooltip>}>
              <InfoCircle className="text-primary ms-2"/>
            </OverlayTrigger>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-end">
            <Toggle
                defaultChecked={transformer.permissive}
                icons={false}
                onChange={(event: { currentTarget: { checked: any; }; }) => setPermissive({
                  ...transformer,
                  permissive: event.currentTarget.checked
                })}/>
          </div>
        </Col>
      </Row>
  )
}