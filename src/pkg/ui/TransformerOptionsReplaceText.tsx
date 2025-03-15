import ReplaceText from "../transformers/ReplaceText";
import {Input} from "antd";

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
    <>
      <Input
        addonBefore="Replace"
        value={transformer.old}
        onChange={(event) => setReplacer({...transformer, old: event.currentTarget.value})}/>
      <Input
        addonBefore="With"
        value={transformer.new}
        onChange={(event) => setReplacer({...transformer, new: event.currentTarget.value})}/>
    </>
  )
}