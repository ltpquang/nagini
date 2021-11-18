import React, {useEffect, useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import TransformEngine from "../base/TransformEngine";
import TransformEngineComponent from "./TransformEngineComponent";
import ReactJson from "react-json-view";

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const [engine, setEngine] = useState<TransformEngine>(new TransformEngine());
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    setOutput(engine.transformData(input))
  }, [engine, input])

  const renderOutput = (output: string) => {
    let obj = {}
    try {
      obj = JSON.parse(input);
      return <ReactJson src={obj}/>
    } catch (e) {
      return (
          <FloatingLabel controlId="outputTextArea" label="Output">
            <Form.Control
                as="textarea"
                placeholder="Paste"
                style={{height: '100px'}}
                value={output}
                readOnly={true} />
          </FloatingLabel>
      )
    }
  }

  return (
      <div className="Main">
        <Row>
          <Col md={{span: 5}}>
            <FloatingLabel controlId="inputTextArea" label="Input">
              <Form.Control
                  as="textarea"
                  placeholder="Paste"
                  style={{height: '100px'}}
                  onChange={(event) => {
                    setInput(event.currentTarget.value)
                  }}
              />
            </FloatingLabel>
            <Row>
              <Col md={{span: 10, offset: 1}}>
                <TransformEngineComponent onChange={setEngine}/>
              </Col>
            </Row>
          </Col>
          <Col md={{span: 7}}>
            {renderOutput(output)}
          </Col>
        </Row>
      </div>
  )
}

export default Main

