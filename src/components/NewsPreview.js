import React from 'react';
import { Dialog, DialogContent, Typography } from '@mui/material';

export default function NewsPreview({ article, onClose, isMobile }) {
  if (!article) return null;

  return isMobile ? (
    <Dialog open={Boolean(article)} onClose={onClose}>
      <DialogContent>
        <Typography variant="h5">{article.title}</Typography>
        <img src={article.urlToImage} alt={article.title} style={{ width: '100%' }} />
        <Typography>{article.content} <a href={article.url} target="_blank" rel="noopener noreferrer">
             Read Full Article
        </a></Typography>
      </DialogContent>
    </Dialog>
  ) : (
    <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
      <Typography variant="h5">{article.title}</Typography>
      <img src={article.urlToImage} alt={article.title} style={{ width: '100%' }} />
      <Typography>{article.content}
      <a href={article.url} target="_blank" rel="noopener noreferrer">
             Read Full Article
        </a></Typography>
    </div>
  );
}
