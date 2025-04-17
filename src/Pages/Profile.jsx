import { Avatar, Box, Container, Typography, Paper, Grid, Divider, Button } from '@mui/material';

export default function Profile() {
  // Dummy user data (replace with props or API call later)
  const user = {
    name: 'Abram Ortiz',
    email: 'abram.ortiz@example.com',
    location: 'San Antonio, TX',
    role: 'Full Stack Developer',
    bio: 'Passionate about building tools that make job hunting smarter. Loves React, Java Spring, and gaming in his downtime.',
    avatar: 'https://i.pravatar.cc/150?img=0',
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      {/* Profile Header */}
      <Box display="flex" alignItems="center" gap={3} mb={4}>
        <Avatar src={user.avatar} sx={{ width: 80, height: 80 }} />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography color="textSecondary">{user.email}</Typography>
          <Typography color="textSecondary">{user.location}</Typography>
        </Box>
      </Box>

      {/* Profile Details Card */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="medium" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" mb={2}>
          {user.bio}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Role
            </Typography>
            <Typography variant="body1">{user.role}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Location
            </Typography>
            <Typography variant="body1">{user.location}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Edit Profile Button */}
      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary">
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
}
