import {useEffect, useState} from "react";
import TransformEngine from "../base/TransformEngine";
import {useSearchParams, useNavigate, useLocation} from 'react-router';
import {JsonViewer} from "@textea/json-viewer";
import {Container, Grid2, Grow} from "@mui/material";
import {InputBox} from "../../InputBox";
import {isInteger, parse, parseNumberAndBigInt, toSafeNumberOrThrow} from 'lossless-json';

export const Main = () => {
  const [input, setInput] = useState<string>("");
  const [engine, _setEngine] = useState<TransformEngine>(() => new TransformEngine());
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

  const customNumberParser = (value: string) => {
    try {
      return toSafeNumberOrThrow(value);;
    } catch (_) {
      return BigInt(value);
    }
  }

  const parseOutput = (output: string) => {
    try {
      return parse(output, null, customNumberParser);
    } catch (_e) {
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
                 padding: "36px 0"
               }}
        >

          <Grid2
            key="input"
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
            mountOnEnter={true}
            unmountOnExit={true}
            {...inputAvailable ? {timeout: 500} : {timeout: 0}}
          >

            <Grid2
              key="output"
              size={7}
              sx={{
                justifyContent: "start",
                maxHeight: "100%",
                overflow: "auto",
                scrollbarColor: "lightgray whitesmoke",
                scrollbarWidth: "thin",
                padding: "24px 0",
              }}
            >

              <JsonViewer
                value={parseOutput(output)}
                rootName={false}
                displaySize={false}
                displayDataTypes={false}
                highlightUpdates={false}
                displayComma={true}
                editable={false}
                sx={{
                  whiteSpace: 'auto',
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

