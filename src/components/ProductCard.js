import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
         <Typography variant="body2" component="div">
          {product.description}
        </Typography>
        <Typography variant="h6" component="div">
          {product.ratting}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
