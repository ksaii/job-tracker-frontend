import React from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <LoginContainer />
    // <Container maxWidth="xs">
  );
};


function LoginContainer() {

    const navigate = useNavigate();
    const handleGoRegister = () => {
        navigate("/Register"); // Redirect to Register page
        }

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Email" variant="outlined" fullWidth required />
          <TextField label="Password" type="password" variant="outlined" fullWidth required />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Button variant="outlined" color="primary" onClick={handleGoRegister} fullWidth>
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
