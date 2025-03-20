import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CardSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Stay Organized, Stay Ahead!
          </Typography>
          <Typography color="textSecondary" mt={1}>
            Track your job applications efficiently.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardSection;
