import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Fake Store Products</h1>
      <Button variant="contained" color="primary" onClick={fetchProducts}>
        Fetch Products
      </Button>
      {loading && <p>Loading...</p>}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
