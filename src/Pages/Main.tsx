import { Box, Stack, Typography } from "@mui/material";

export const Main = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      bgcolor="#DDDDDD"
    >
      <Stack
        width={{ xs: "100%", sm: 500 }}
        bgcolor="#FFFFFF"
        height="100vh"
        boxShadow={0}
        spacing={3}
      >
        {/* Formulário de criação de post */}
        <Box pl={4} bgcolor={"#7695EC"} py={"27px"}>
        <Typography fontWeight={700} fontSize={22} color="#FFFFFF">
          CodeLeap Network
        </Typography>
        </Box>

        {/* Aqui depois vai o TextField, textarea ou outros componentes */}
      </Stack>
    </Box>
  );
};
