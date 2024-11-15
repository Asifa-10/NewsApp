import React from 'react';
import NewsCard from './NewsCard';

export default function NewsList({ articles, onArticleSelect }) {
  return (
    <div style={{ overflowY: 'auto', height: '100vh', padding: '16px' }}>
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} onClick={() => onArticleSelect(article)} />
      ))}
    </div>
  );
}
