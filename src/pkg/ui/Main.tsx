import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import TransformEngine from "../base/TransformEngine";
import TransformEngineComponent from "./TransformEngineComponent";
import {defaultStyles, JsonView} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import TextareaAutosize from 'react-textarea-autosize'

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
      obj = JSON.parse(output);
      return <JsonView
          data={obj}
          shouldInitiallyExpand={(_) => true}
          style={defaultStyles}
      />
    } catch (e) {
      return <div className="output-textarea bg-light border">
        {output}
      </div>
    }
  }

  return (
      <div className="Main">
        <Row>
          <Col md={{span: 5}} className="main-layout-column scrolling-area">
            <div className="scrolling-element-inside">
              <div className="position-relative">
                <TextareaAutosize
                    className="input-textarea bg-light border"
                    onChange={(event) => setInput(event.currentTarget.value)}
                />
                { input.length > 0 || <div className="textarea-placeholder noselect position-absolute top-50 start-50 translate-middle">INPUT</div>}
              </div>
              <Row className="mb-5">
                <Col md={{span: 10, offset: 1}}>
                  <TransformEngineComponent
                      onChange={setEngine}/>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={{span: 7}} className="main-layout-column">
            <div className="position-relative">
              {renderOutput(output)}
              { output.length > 0 || <div className="textarea-placeholder noselect position-absolute top-50 start-50 translate-middle">OUTPUT</div>}
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default Main

