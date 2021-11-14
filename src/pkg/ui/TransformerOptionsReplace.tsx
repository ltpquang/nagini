import {Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import Replace from "../transformers/Replace";
import React, {useEffect, useState} from "react";

interface Props {
  transformer: Replace
}

export const TransformerOptionsReplace = ({transformer}: Props) => {
  const [replacer, setReplacer] = useState<Partial<Replace>>(transformer)
  useEffect(() => {
    console.log(replacer)
  }, [replacer])

  return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="replace">Replace</InputGroup.Text>
          <DropdownButton
              id="isRegex"
              title={replacer.useRegEx ? "regex" : "text"}
              variant="outline-secondary"
              onSelect={(eventKey) => setReplacer({...replacer, useRegEx: eventKey === "regex"})}>
            <Dropdown.Item eventKey="text">text</Dropdown.Item>
            <Dropdown.Item eventKey="regex">regex</Dropdown.Item>
          </DropdownButton>
          <FormControl
              placeholder={replacer.old && replacer.old?.length > 0 ? replacer.old : ""}
              onChange={(event) => setReplacer({...replacer, old: event.currentTarget.value})}/>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="with">with</InputGroup.Text>
          <FormControl
              placeholder={replacer.new && replacer.new?.length > 0 ? replacer.new : ""}
              onChange={(event) => setReplacer({...replacer, new: event.currentTarget.value})}/>
        </InputGroup>
      </div>
  )
}