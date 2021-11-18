import React from "react";
import JsonBeautify from "../transformers/JsonBeautify";
import Toggle from "react-toggle";

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
      <div>
        <label>
          <Toggle
              defaultChecked={false}
              icons={false}
              onChange={(event: { currentTarget: { checked: any; }; }) => setPermissive({...transformer, permissive: event.currentTarget.checked})} />
          <span>Permissive</span>
        </label>
      </div>
  )
}