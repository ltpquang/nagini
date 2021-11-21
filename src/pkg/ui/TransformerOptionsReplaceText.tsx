import {FormControl, InputGroup} from "react-bootstrap";
import ReplaceText from "../transformers/ReplaceText";
import React from "react";

interface Props {
  transformer: ReplaceText
  onChange?: (updated: ReplaceText) => void
}

export const TransformerOptionsReplaceText = ({transformer, onChange}: Props) => {
  const setReplacer = (input: Partial<ReplaceText>) => {
    if (onChange) {
      onChange(ReplaceText.fromPartial(input))
    }
  }

  return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="replace">Replace</InputGroup.Text>
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