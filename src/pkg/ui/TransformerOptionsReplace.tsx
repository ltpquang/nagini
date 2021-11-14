import {Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import Replace from "../transformers/Replace";
import React, {useState} from "react";

interface Props {
  transformer: Replace
}

export const TransformerOptionsReplace = ({transformer}: Props) => {
  const [useRegEx, setUseRegEx] = useState<boolean>(transformer.useRegEx)

  function onDropdownSelect(eventKey: string | null) {
    if (!eventKey) {
      return
    }

    setUseRegEx(eventKey === "regex")
  }

  return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="replace">Replace</InputGroup.Text>
          <DropdownButton
              id="isRegex"
              title={useRegEx ? "regex" : "text"}
              variant="outline-secondary"
              onSelect={(eventKey) => onDropdownSelect(eventKey)}>
            <Dropdown.Item eventKey="text">text</Dropdown.Item>
            <Dropdown.Item eventKey="regex">regex</Dropdown.Item>
          </DropdownButton>
          <FormControl placeholder="text"/>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="with">With</InputGroup.Text>
          <FormControl placeholder="text"/>
        </InputGroup>
      </div>
  )
}