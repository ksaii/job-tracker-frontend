import React from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";

const RegisterPage = () => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Full Name" variant="outlined" fullWidth required />
          <TextField label="Email" variant="outlined" fullWidth required />
          <TextField label="Password" type="password" variant="outlined" fullWidth required />
          <TextField label="Confirm Password" type="password" variant="outlined" fullWidth required />
          <Button variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
