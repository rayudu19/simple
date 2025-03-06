import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1">This is a simple app demonstrating React, Material UI, and React Router DOM.</Typography>
    </Box>
  );
};

export default AboutPage;
