import JsonPath from "../transformers/JsonPath";
import {Input} from "antd";

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
      <>
        <Input
          addonBefore="Query"
          placeholder={transformer.jsonPath}
          onChange={(event) => setJsonPathTrans({...transformer, jsonPath: event.currentTarget.value})}/>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Notation</th>
            <th scope="col">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">$</th>
            <td>The root element</td>
          </tr>
          <tr>
            <th scope="row">.</th>
            <td>Child member operator</td>
          </tr>
          <tr>
            <th scope="row">..</th>
            <td>Recursive descendant operator</td>
          </tr>
          <tr>
            <th scope="row">[]</th>
            <td>Subscript operator</td>
          </tr>
          </tbody>
        </table>
        <a className="d-flex justify-content-end"
           target="_blank" rel="noopener noreferrer"
           href="https://github.com/dchester/jsonpath#jsonpath-syntax">More examples</a>
      </>
  )
}