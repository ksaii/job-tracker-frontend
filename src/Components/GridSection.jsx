import { Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const GridSection = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Discover Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[...Array(3)].map((_, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  p: 3,
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                Feature {index + 1}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridSection;
