import { Card, CardContent, Typography, CardMedia } from "@mui/material";

export default function TestimonialCard() {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="testimonial"
      />
      <CardContent>
        <Typography variant="h6">John Doe</Typography>
        <Typography color="textSecondary">Amazing service! Highly recommend.</Typography>
      </CardContent>
    </Card>
  );
}
