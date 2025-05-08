import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import { Box, Container, Typography, useTheme } from '@mui/material';
import GridSection from '../Components/GridSection';
import CardSection from '../Components/CardSection';
import { motion } from 'framer-motion';

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 6, // Increased padding for more spacious feel
        px: { xs: 2, sm: 3, md: 4 }, // Responsive horizontal padding
      }}
    >
      {/* Hero Section with Fade-in Animation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center hero content
          alignItems: 'center',
          width: '100%', // Use full width
          mb: 8, // Increased bottom margin
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
          </motion.div>
        </Container>
      </Box>

      {/* Main Content Container */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8, // Increased gap between sections
          width: '100%', // Use full width
        }}
      >
        {/* Grid Section */}
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GridSection />
          </motion.div>
        </Container>

        {/* Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Container maxWidth="lg">
            <CardSection />
          </Container>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
