import {useEffect, useState} from "react";
import TransformEngine from "../base/TransformEngine";
// import TransformEngineComponent from "./TransformEngineComponent";
import {defaultStyles, JsonView} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import TextareaAutosize from 'react-textarea-autosize';
import {useSearchParams, useNavigate, useLocation} from 'react-router';
import {Col, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import {JsonViewer} from "@textea/json-viewer";

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const [engine, setEngine] = useState<TransformEngine>(() => new TransformEngine());
  const [output, setOutput] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const navigate = useNavigate();

  const handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();
    const paste = event.clipboardData?.getData("text");
    if (paste) {
      setInput(paste);
    }
  };

  useEffect(() => {
    let takeClipboard;
    if (searchParams.has("c")) {
      takeClipboard = searchParams.get("c");
      if (takeClipboard) {
        searchParams.delete("c");
        setSearchParams(searchParams);
        navigate(location.pathname, {replace: true});
      }
    }

    // clipboard request
    if (takeClipboard === '1') {
      navigator.clipboard.readText().then(r => {
        setInput(r);
      })
    }
  }, [location, navigate, searchParams, setSearchParams]);

  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  useEffect(() => {
    const result = engine.transformData(input)
    setOutput(result);
  }, [engine, input])

  const renderOutput = (output: string) => {
    let obj = {}
    try {
      obj = JSON.parse(output);
      return <JsonViewer value={obj}/>
      // return <JsonView
      //   data={obj}
      //   shouldExpandNode={() => true}
      //   style={defaultStyles}
      // />
    } catch (e) {
      console.log(e);
      return <JsonViewer value={output}/>
      // return <div className="output-textarea bg-light border">
      //   {output}
      // </div>
    }
  }

  // const getShortcutText = () => {
  //   if (navigator.platform.toLowerCase().indexOf("mac") !== -1) {
  //     return "⌘ + V";
  //   } else {
  //     return "Ctrl + V";
  //   }
  // }

  return (
    <>
      <Row>
        <Col flex={2} style={{backgroundColor: "#f0f0f0"}}>
          <TextArea
            value={input}
            autoSize={{minRows: 3, maxRows: 5}}
            onChange={(event) => setInput(event.target.value)}
            onPaste={(event) => {
              event.preventDefault();
              const paste = event.clipboardData?.getData("text");
              if (paste) {
                setInput(paste);
              }
            }}
          />
          {/*<TransformEngineComponent onChange={setEngine}/>*/}
        </Col>
        <Col flex={3} style={{backgroundColor: "lightcoral"}}>
          {renderOutput(output)}
        </Col>
      </Row>


      {/*{input.length > 0 || <div*/}
      {/* className="textarea-placeholder noselect position-absolute top-50 start-50 translate-middle">{getShortcutText()}</div>}*/}
      {/*{output.length > 0 || <div*/}
      {/* className="textarea-placeholder noselect position-absolute top-50 start-50 translate-middle">···</div>}*/}

      {/*{output.length > 0 || <a target="_blank"*/}
      {/*                         rel="noopener noreferrer"*/}
      {/*                         href="https://github.com/ltpquang/nagini"*/}
      {/*                         className="position-absolute top-0 end-0">*/}
      {/*<Image loading="lazy" width="120" height="120"*/}
      {/*       src="https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149"*/}
      {/*       className="attachment-full size-full"*/}
      {/*       alt="Fork me on GitHub"*/}
      {/*       data-recalc-dims="1"/>*/}
    </>
  )
}

export default Main

