import { Container, Typography, Button, Box } from "@mui/material";

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" py={10}>
        <Typography variant="h3" fontWeight="bold">
          Welcome to the Job Application Tracker
        </Typography>
        <Typography variant="h6" color="textSecondary" mt={2}>
          Build amazing projects with ease.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
