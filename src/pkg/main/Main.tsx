import React, {useCallback, useEffect, useRef, useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import TransformEngine from "../engine/TransformEngine";

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const engineRef = useRef<TransformEngine>(null)

  const [output, setOutput] = useState<string>("");

  const computeOutput = useCallback(() => {
    let result = input;
    console.log("before chain result", result)
    if (engineRef.current) {
      result = engineRef.current.transform(result)
      console.log("result", result)
    }
    console.log("after chain result", result)
    setOutput(result)
  }, [input, engineRef])

  useEffect(() => {
    computeOutput()
  }, [computeOutput])

  const handleTransformEngineOnChange = (engine: TransformEngine) => {
    console.log("receive on change")
    computeOutput()
  }

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
            <TransformEngine
                ref={engineRef}
                onChange={handleTransformEngineOnChange}/>
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
                  readOnly={true}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
  )
}

export default Main

