import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box textAlign="center" p={3} bgcolor="primary.main" color="white">
      <Typography>&copy; {new Date().getFullYear()} Made with Love by Abram. All Rights Reserved.</Typography>
    </Box>
  );
}
