import { Box } from "@mui/material";
import { AppRoutes } from "./Router";

export function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      height="100vh"
      bgcolor="#DDDDDD"
      padding={2}
    >
      <AppRoutes />
    </Box>
  );
}
