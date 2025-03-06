// src/components/HomePage.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h4">Welcome to the Home Page!</Typography>
      <Typography variant="body1">This is a simple React app with MUI and React Router.</Typography>
    </Box>
  );
};

export default HomePage;
