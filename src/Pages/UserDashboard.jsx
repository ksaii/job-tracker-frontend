import { Container, Typography, Box, Card, CardContent, Grid2 } from "@mui/material";
import { TrendingUp, AssignmentTurnedIn } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Dashboard() {
  // Static placeholders
  const appCount = 12;
  const aiRating = 85; // AI rating out of 100

  return (
    <Container maxWidth="md">
      <Box textAlign="center" py={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Job Application Tracker Dashboard
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Stay on top of your job hunt with real-time insights.
        </Typography>
      </Box>

      <Grid2 container spacing={4} justifyContent="center">
        {/* Applications Submitted Card */}
        <Grid2 xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <AssignmentTurnedIn color="primary" sx={{ fontSize: 60 }} />
                <Typography variant="h5" fontWeight="bold" mt={2}>
                  Applications Submitted
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  color="primary"
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {appCount}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid2>

        {/* AI Resume Rating Card */}
        <Grid2 xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <TrendingUp color="secondary" sx={{ fontSize: 60 }} />
                <Typography variant="h5" fontWeight="bold" mt={2}>
                  AI Resume Rating
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  color="secondary"
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {aiRating}%
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid2>
      </Grid2>
    </Container>
  );
}
