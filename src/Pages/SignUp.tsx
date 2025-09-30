import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useName } from "../Context/UserContext";

export function SignUp() {
  const { username, setUsername } = useName();
  const [inputValue, setInputValue] = useState(username);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!inputValue.trim()) return;
    setUsername(inputValue.trim());
    localStorage.setItem("codeleap_username", inputValue.trim());
    navigate("/main");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#DDDDDD"
      padding={2}
    >
      <Stack
        width={{ xs: "100%", sm: 500 }}
        minHeight={205}
        maxHeight={400}
        bgcolor="#FFFFFF"
        padding={3}
        borderRadius={4}
        border="1px solid #CCCCCC"
        boxShadow={0}
        alignItems="stretch"
      >
        <Stack gap={3}>
          <Typography fontWeight={700} color="textPrimary" fontSize="22px">
            Welcome to CodeLeap network!
          </Typography>
          <Typography fontSize="16px" color="textPrimary">
            Please enter your usernameaa
          </Typography>
        </Stack>

        <TextField
          placeholder="John Doe"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          sx={{
            width: { xs: "100%", sm: 452 },
            height: 32,
            paddingY: 1,
            "& .MuiOutlinedInput-root": {
              height: 32,
              borderRadius: 1,
              "& fieldset": {
                borderColor: "#777777",
                borderWidth: 1,
              },
              "&:hover fieldset": {
                borderColor: "#777777",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7695EC",
              },
            },
            "& .MuiInputBase-input": {
              padding: "6px 12px",
              height: 20,
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              "&::placeholder": {
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                opacity: 1,
                color: "#777777",
              },
            },
          }}
        />

        <Box display="flex" justifyContent="flex-end" pt={2}>
          <Button
            onClick={handleContinue}
            disabled={!inputValue.trim()}
            sx={{
              width: 111,
              height: 32,
              borderRadius: 1, // 8px
              backgroundColor: inputValue.trim() ? "#7695EC" : "#C0C0C0",
              textTransform: "none",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "16px",
              "&:hover": {
                backgroundColor: inputValue.trim() ? "#5a7bd6" : "#C0C0C0",
              },
            }}
          >
            Enter
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
