import { Box } from "@mui/material";
import { SignUp } from "./Pages/SignUp";

export function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      height="100vh"
      bgcolor={"#DDDDDD"}
    >
      <SignUp/>
    </Box>
  );
}
