import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext"; // Ensure this import is correct

const Login = () => {
  return (
    <LoginContainer />
  );
};

function LoginContainer() {
  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling any login errors

  const handleLogin = (e) => {
    e.preventDefault();

    // For demo purposes, we'll assume these are the correct credentials
    const dummyUser = { name: "John Doe", email: "johndoe@example.com" };

    // You can replace this with actual API call for authentication
    if (email === "1" && password === "2") {
      login(dummyUser); // Log the user in via context
      navigate("/dashboard"); // Redirect to the dashboard page after successful login
    } else {
      setError("Invalid email or password!"); // Show error message if credentials are incorrect
    }
  };

  const handleGoRegister = () => {
    navigate("/register"); // Redirect to Register page
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        {error && <Typography color="error" sx={{ marginBottom: 2 }}>{error}</Typography>} {/* Show error if login fails */}
        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture email input
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Capture password input
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
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
