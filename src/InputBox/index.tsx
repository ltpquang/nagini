import {Box, Stack, TextField, TextFieldProps, Typography} from "@mui/material";

export type InputBoxProps = TextFieldProps;

export const InputBox = (props: InputBoxProps) => {
  const inputLength = (props.value as string)?.length || 0;

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
                color: '#002b36',
                opacity: 0.8,
                maxHeight: '70vh',
                overflow: 'auto',
                fontSize: '13px'
              }
            }
          }}
          {...props}
        />
        {
          inputLength === 0 && (
            <Stack
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
              <Typography variant="body1" sx={{color: "lightgray"}}> Paste your JSON </Typography>
              <Typography variant="h3" sx={{color: "lightgray"}}> {getShortcutText()} </Typography>
            </Stack>
          )
        }
      </Box>
    </>
  )
}