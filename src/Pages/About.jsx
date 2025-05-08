import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Job Tracker & Analyzer
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our project, a dedicated resume tracker and analyzer designed to empower your
          job search journey. Our mission is to provide you with the tools and insights necessary to
          effectively manage and analyze your job applications.
        </Typography>
        <Typography variant="body1" paragraph>
          This platform is built to help you keep track of every application, from the initial
          submission to follow-ups and interviews. But it doesn't stop there. We go beyond simple
          tracking. Our analyzer provides valuable insights into your application process, helping
          you identify trends, strengths, and areas for improvement.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're a seasoned professional or a fresh graduate, our goal is to make your job
          search more organized and insightful.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
