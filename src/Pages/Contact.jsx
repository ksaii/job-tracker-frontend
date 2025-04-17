import { Box, Container, Typography, Paper, IconButton, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  const githubUrl = 'https://github.com/ksaii'; // replace with your actual GitHub
  const emailAddress = 'aortiz7814@gmail.com'; // replace with your real email

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          Feel free to reach out via email or check out my GitHub for more of my work.
        </Typography>

        <Stack direction="row" spacing={4} justifyContent="center">
          <Link href={githubUrl} target="_blank" rel="noopener">
            <IconButton size="large" color="primary">
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Link>

          <Link href={`mailto:${emailAddress}`}>
            <IconButton size="large" color="secondary">
              <EmailIcon fontSize="inherit" />
            </IconButton>
          </Link>
        </Stack>

        <Box mt={3}>
          <Typography variant="body2" color="textSecondary">
            {emailAddress}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
