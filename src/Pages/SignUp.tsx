import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // se for usar React Router
import { useName } from "../Context/UserContext";

export function SignUp() {
  const { username, setUsername } = useName();
  const [inputValue, setInputValue] = useState(username);
  const navigate = useNavigate(); // para redirecionar para a Main

  const handleContinue = () => {
    if (!inputValue.trim()) return; // não aceita vazio
    setUsername(inputValue.trim());
    localStorage.setItem("codeleap_username", inputValue.trim()); // opcional: persiste no localStorage
    navigate("/main"); // redireciona para a tela principal
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#F5F5F5"
      padding={2}
    >
      <Stack
        spacing={4}
        width={{ xs: 300, sm: 400, md: 500 }}
        bgcolor="#fff"
        padding={4}
        borderRadius={3}
        boxShadow={3}
        alignItems="center"
      >
        <Typography variant="h4" fontWeight={500} color="primary">
          Bem-vindo ao CodeLeap
        </Typography>

        <TextField
          label="Digite seu nome"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={handleContinue}
          fullWidth
        >
          Continuar
        </Button>
      </Stack>
    </Box>
  );
}
