import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import ReplaceRegEx from "../transformers/ReplaceRegEx";

interface Props {
  transformer: ReplaceRegEx
  onChange?: (updated: ReplaceRegEx) => void
}

export const TransformerOptionsReplaceRegEx = ({transformer, onChange}: Props) => {
  const setReplacer = (input: Partial<ReplaceRegEx>) => {
    if (onChange) {
      onChange(ReplaceRegEx.fromPartial(input))
    }
  }

  return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="replace">Replace</InputGroup.Text>
          <InputGroup.Text>/</InputGroup.Text>
          <FormControl
              placeholder={transformer.old}
              onChange={(event) => setReplacer({...transformer, old: event.currentTarget.value})}/>
          <InputGroup.Text>/g</InputGroup.Text>
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