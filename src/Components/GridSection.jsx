import { Grid, Typography, Box, List, ListItem, ListItemIcon } from "@mui/material";
import { motion } from "framer-motion";
import DescriptionIcon from "@mui/icons-material/Description"; // For AI Resume Analyzer
import ListAltIcon from "@mui/icons-material/ListAlt"; // For Custom List
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // For Making it Fun

const features = [
  {
    title: "AI Resume Analyzer",
    description: "Get instant feedback on your resume and improve your chances of landing interviews.",
    icon: <DescriptionIcon fontSize="large" />,
  },
  {
    title: "Track Your Applications",
    description: "Organize and manage your job applications in a personalized, easy-to-use list.",
    icon: <ListAltIcon fontSize="large" />,
  },
  {
    title: "Make It Fun",
    description: "Gamify your job search with achievements and milestones to keep you motivated.",
    icon: <EmojiEventsIcon fontSize="large" />,
  },
];

const GridSection = () => {
  return (
    <Box textAlign="center" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Discover Features
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ListItemIcon sx={{ color: "white", mb: 2 }}>
                  {feature.icon}
                </ListItemIcon>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridSection;