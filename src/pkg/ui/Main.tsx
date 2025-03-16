import {useEffect, useState} from "react";
import TransformEngine from "../base/TransformEngine";
// import TransformEngineComponent from "./TransformEngineComponent";
import 'react-json-view-lite/dist/index.css';
import {useSearchParams, useNavigate, useLocation} from 'react-router';
import {JsonViewer} from "@textea/json-viewer";
import {Container, Grid2, Collapse, Grow, Fade} from "@mui/material";
import {InputBox} from "../../InputBox/index..tsx";
import {TransitionGroup} from "react-transition-group";

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const [engine, setEngine] = useState<TransformEngine>(() => new TransformEngine());
  const [output, setOutput] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const navigate = useNavigate();

  const inputAvailable = input.length > 0;

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

  const parseOutput = (output: string) => {
    try {
      return JSON.parse(output);
    } catch (e) {
      return output;
    }
  }

  return (
    <>
      <Container style={{width: "100%", height: "100vh"}}>

        <Grid2 container columnSpacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >

          <Grid2
            // key="input"
            size={5}
            sx={{
              justifyContent: "start",
              maxHeight: "100%",
              padding: "48px 0",
              overflow: "auto"
            }}
          >
            <InputBox
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onPaste={(event) => {
                event.preventDefault();
                const paste = event.clipboardData?.getData("text");
                if (paste) {
                  setInput(paste);
                }
              }}
            />
          </Grid2>


          <Grow
            in={inputAvailable}
            style={{transformOrigin: '0 0 0'}}
            unmountOnExit={true}
            {...inputAvailable ? {timeout: 500} : {timeout: 0}}
          >
            <Grid2
              key="output"
              size={7}
              sx={{
                justifyContent: "start",
                maxHeight: "100%",
                padding: "48px 0",
                overflow: "auto"
              }}
            >
              <JsonViewer
                value={parseOutput(output)}
                rootName={false}
                displaySize={false}
                displayDataTypes={false}
                highlightUpdates={false}
                editable={false}
                sx={{
                  whiteSpace: 'nowrap',
                }}
              />
            </Grid2>
          </Grow>

        </Grid2>
      </Container>
    </>
  )
}

export default Main

