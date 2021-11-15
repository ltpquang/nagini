import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import JsonPath from "../transformers/JsonPath";

interface Props {
  transformer: JsonPath
  onChange?: (updated: JsonPath) => void
}

export const TransformerOptionsJsonPath = ({transformer, onChange}: Props) => {
  const setJsonPathTrans = (input: Partial<JsonPath>) => {
    if (onChange) {
      onChange(JsonPath.fromPartial(input))
    }
  }

  return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="json-path">JSON Path</InputGroup.Text>
          <FormControl
              placeholder={transformer.jsonPath}
              onChange={(event) => setJsonPathTrans({...transformer, jsonPath: event.currentTarget.value})}/>
        </InputGroup>
      </div>
  )
}