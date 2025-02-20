import { Paper, Typography, Box, Grid } from "@mui/material";

export default function Features() {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Grid container spacing={4}>
        {[1, 2, 3].map((item) => (
          <Grid key={item} xs={12} sm={4} display="flex" justifyContent="center">
            <Paper sx={{ p: 4, textAlign: "center", width: "100%", maxWidth: 300 }}>
              <Typography variant="h6">Feature {item}</Typography>
              <Typography color="textSecondary">Description of the feature.</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
