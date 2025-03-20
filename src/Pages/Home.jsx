import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Box, Container } from "@mui/material";
import GridSection from "../Components/GridSection"; // Renamed for clarity
import CardSection from "../Components/CardSection"; // New component
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      

      {/* Hero Section with Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Container maxWidth="lg" sx={{ my: 5 }}>
          <GridSection />
        </Container>
      </motion.div>

      {/* Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Container maxWidth="lg" sx={{ my: 5 }}>
          <CardSection />
        </Container>
      </motion.div>

      <Footer />
    </Box>
  );
};

export default Home;
