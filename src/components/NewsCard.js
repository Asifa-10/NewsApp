import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function NewsCard({ article, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer', marginBottom: '16px' }}>
      {article.urlToImage && (
  <CardMedia component="img" height="140"  image={article.urlToImage} alt={article.title} />
)}
      <CardContent >
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {article.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
