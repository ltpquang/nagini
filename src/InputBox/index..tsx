import {Box, TextField, TextFieldProps, Typography} from "@mui/material";

export type InputBoxProps = TextFieldProps;

export const InputBox = (props: InputBoxProps) => {
  const getShortcutText = () => {
    if (navigator.platform.toLowerCase().indexOf("mac") !== -1) {
      return "⌘ + V";
    } else {
      return "Ctrl + V";
    }
  }

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%"
        }}
      >
        <TextField
          multiline={true}
          fullWidth={true}
          minRows={7}
          maxRows={14}
          slotProps={{
            input: {
              sx: {
                fontFamily: 'monospace',
                maxHeight: '70vh',
                overflow: 'auto',
                fontSize: '13px'
              }
            }
          }}
          {...props}
        />
        {
          props.value.length === 0 && (
            <Box
              sx={{
                position: "absolute",
                pointerEvents: "none",
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" sx={{color: "lightgray"}}> {getShortcutText()} </Typography>
            </Box>
          )
        }
      </Box>
    </>
  )
}