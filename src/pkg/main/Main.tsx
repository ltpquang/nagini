import React, {useEffect, useRef, useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import TransformEngine from "../engine/TransformEngine";

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const engineRef = useRef<TransformEngine>(null)

  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    let result = input;
    if (engineRef.current) {
      result = engineRef.current.transform(result)
    }
    setOutput(result)
  }, [input, engineRef])

  return (
      <div className="Main">
        <Row>
          <Col md={{span: 8, offset: 2}}>
            <FloatingLabel controlId="inputTextArea" label="Input">
              <Form.Control
                  as="textarea"
                  placeholder="Paste"
                  style={{height: '100px'}}
                  onChange={(event) => {setInput(event.currentTarget.value)}}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 6, offset: 3}}>
            <TransformEngine ref={engineRef} />
          </Col>
        </Row>
        <Row>
          <Col md={{span: 8, offset: 2}}>
            <FloatingLabel controlId="outputTextArea" label="Output">
              <Form.Control
                  as="textarea"
                  placeholder="Paste"
                  style={{height: '100px'}}
                  value={output}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
  )
}

export default Main

