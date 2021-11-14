import {Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import Replace from "../transformers/Replace";
import React from "react";

interface Props {
  transformer: Replace
  onChange?: (updated: Replace) => void
}

export const TransformerOptionsReplace = ({transformer, onChange}: Props) => {
  const setReplacer = (input: Partial<Replace>) => {
    if (onChange) {
      onChange(Replace.fromPartial(input))
    }
  }

  return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="replace">Replace</InputGroup.Text>
          <DropdownButton
              id="isRegex"
              title={transformer.useRegEx ? "regex" : "text"}
              variant="outline-secondary"
              onSelect={(eventKey) => setReplacer({...transformer, useRegEx: eventKey === "regex"})}>
            <Dropdown.Item eventKey="text">text</Dropdown.Item>
            <Dropdown.Item eventKey="regex">regex</Dropdown.Item>
          </DropdownButton>
          <FormControl
              placeholder={transformer.old}
              onChange={(event) => setReplacer({...transformer, old: event.currentTarget.value})}/>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="with">with</InputGroup.Text>
          <FormControl
              placeholder={transformer.new}
              onChange={(event) => setReplacer({...transformer, new: event.currentTarget.value})}/>
        </InputGroup>
      </div>
  )
}