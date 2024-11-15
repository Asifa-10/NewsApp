import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
import NewsPreview from '../components/NewsPreview';

const API_KEY = '33f485f58d794456bc73e593133398c0';

export default function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [category, setCategory] = useState('general');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: { category, country: 'us', apiKey: API_KEY },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <NavBar onCategorySelect={setCategory} />
      <div style={{ display: 'flex', paddingTop: '64px' }}>
        <div style={{ flex: 2 }}>
          <NewsList articles={articles} onArticleSelect={setSelectedArticle} />
        </div>
        {!isMobile && <NewsPreview article={selectedArticle} />}
        {isMobile && (
          <NewsPreview article={selectedArticle} onClose={() => setSelectedArticle(null)} isMobile />
        )}
      </div>
    </div>
  );
}
