// Components/RatingCard.jsx
import { Card, CardContent, Typography } from '@mui/material';

const RatingCard = ({ title, value, color }) => (
  <Card sx={{ minWidth: 150, bgcolor: color, color: 'white', borderRadius: 2 }}>
    <CardContent>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h4">{value}%</Typography>
    </CardContent>
  </Card>
);

export default RatingCard;
