import React, {useEffect, useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import TransformEngine from "../base/TransformEngine";
import TransformEngineComponent from "./TransformEngineComponent";

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const [engine, setEngine] = useState<TransformEngine>(new TransformEngine());
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    setOutput(engine.transformData(input))
  }, [engine, input])

  return (
      <div className="Main">
        <Row>
          <Col md={{span: 6}}>
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
            <TransformEngineComponent
                onChange={setEngine}/>
          </Col>
          <Col md={{span: 6}}>
            <FloatingLabel controlId="outputTextArea" label="Output">
              <Form.Control
                  as="textarea"
                  placeholder="Paste"
                  style={{height: '100px'}}
                  value={output}
                  readOnly={true}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
  )
}

export default Main

