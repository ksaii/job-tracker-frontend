import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        p: 3,
        bgcolor: "primary.main",
        color: "white",
        mt: "auto", //This keep footer at bottom btw
      }}
    >
      <Typography>&copy; {new Date().getFullYear()} Made with Love by Abram. All Rights Reserved.</Typography>
    </Box>
  );
}
