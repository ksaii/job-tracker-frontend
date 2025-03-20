import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../AuthContext"; 

export default function Hero() {
  const navigate = useNavigate();
  //const { user } = useAuth(); // implement your authentication context to get the current user
  const user = 1; // Placeholder for user authentication, replace with actual auth logic

  const handleClick = () => {
    if (!user) {
      navigate("/login"); // Redirect to sign-in if not authenticated
    } else {
      navigate("/dashboard"); // Navigate to dashboard if signed in
    }
  };

  return (
    <Container maxWidth="lg">
      <Box textAlign="center" py={12}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Take Control of Your Job Hunt
        </Typography>
        <Typography variant="h5" color="textSecondary" maxWidth="md" mx="auto">
          Track applications, stay organized, and land your dream job with ease.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          sx={{ mt: 4, px: 4, py: 1.5, fontSize: "1.2rem" }}
          onClick={handleClick}
        >
          Start Tracking Now
        </Button>
      </Box>
    </Container>
  );
}
