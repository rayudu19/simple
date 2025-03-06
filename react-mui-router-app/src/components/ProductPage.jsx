// src/components/ProductPage.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Simulating a fetch call to get product data
    const fetchedProducts = [
      { id: 1, name: 'Product 1', description: 'This is product 1', imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', description: 'This is product 2', imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', description: 'This is product 3', imageUrl: 'https://via.placeholder.com/150' },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center">Products</Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia component="img" height="140" image={product.imageUrl} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Buy Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
