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
              value={transformer.old}
              onChange={(event) => setReplacer({...transformer, old: event.currentTarget.value})}/>
          <InputGroup.Text>/g</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="with">with</InputGroup.Text>
          <FormControl
              value={transformer.new}
              onChange={(event) => setReplacer({...transformer, new: event.currentTarget.value})}/>
        </InputGroup>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Expr</th>
            <th scope="col">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row"><code>.</code></th>
            <td>any character except newline</td>
          </tr>
          <tr>
            <th scope="row"><code>\w</code> <code>\d</code> <code>\s</code></th>
            <td>word, digit, whitespace</td>
          </tr>
          <tr>
            <th scope="row"><code>\W</code> <code>\D</code> <code>\S</code></th>
            <td>not word, digit, whitespace</td>
          </tr>
          <tr>
            <th scope="row"><code>[abc]</code></th>
            <td>any of a, b, or c</td>
          </tr>
          <tr>
            <th scope="row"><code>[^abc]</code></th>
            <td>not a, b, or c</td>
          </tr>
          <tr>
            <th scope="row"><code>[a-g]</code></th>
            <td>character between a & g</td>
          </tr>
          <tr>
            <th scope="row"><code>*</code> <code>+</code> <code>?</code></th>
            <td>0 or more, 1 or more, 0 or 1</td>
          </tr>
          <tr>
            <th scope="row"><code>a&#123;5&#125;</code> <code>a&#123;2,&#125;</code></th>
            <td>exactly five, two or more</td>
          </tr>
          <tr>
            <th scope="row"><code>a&#123;1,3&#125;</code></th>
            <td>between one & three</td>
          </tr>
          <tr>
            <th scope="row"><code>ab|cd</code></th>
            <td>match ab or cd</td>
          </tr>
          </tbody>
        </table>
        <a className="d-flex justify-content-end"
           target="_blank" rel="noopener noreferrer"
           href="https://regexr.com/">More examples</a>
      </div>
  )
}