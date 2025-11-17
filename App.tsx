import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { Article } from './types';
import { MOCK_ARTICLES } from './constants';
import useRadioPlayer from './hooks/useRadioPlayer';
import MainLayout from './layouts/MainLayout';

import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

export type View = 'HOME' | 'ARTICLE' | 'CATEGORY' | 'ABOUT' | 'PRIVACY' | 'TERMS';

function App() {
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);
  const [view, setView] = useState<View>('HOME');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const radioPlayer = useRadioPlayer('https://servidor40.brlogic.com:7054/live');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedArticleSlug, selectedCategory]);
  
  const handleUpdateLikes = useCallback((articleSlug: string, newLikes: number) => {
    setArticles(prev => prev.map(a => a.slug === articleSlug ? { ...a, likes: newLikes } : a));
  }, []);

  const handleSelectArticle = useCallback((articleSlug: string) => {
    setSelectedArticleSlug(articleSlug);
    setView('ARTICLE');
    setSelectedCategory(null);
  }, []);

  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
    setView('CATEGORY');
    setSelectedArticleSlug(null);
  }, []);

  const handleNavigate = useCallback((targetView: View) => {
    setView(targetView);
    setSelectedArticleSlug(null);
    setSelectedCategory(targetView === 'HOME' ? 'HOME' : null);
  }, []);
  
  const contextValue = useMemo(() => ({
    articles,
    ...radioPlayer,
    handleUpdateLikes,
    handleSelectArticle,
    handleSelectCategory,
    handleNavigate,
  }), [articles, radioPlayer, handleUpdateLikes, handleSelectArticle, handleSelectCategory, handleNavigate]);

  const renderContent = () => {
    switch (view) {
      case 'ARTICLE':
        const article = articles.find(a => a.slug === selectedArticleSlug);
        return article ? <ArticlePage article={article} /> : <HomePage />;
      case 'CATEGORY':
        return selectedCategory ? <CategoryPage category={selectedCategory} /> : <HomePage />;
      case 'ABOUT':
        return <AboutPage />;
      case 'PRIVACY':
        return <PrivacyPolicyPage />;
      case 'TERMS':
        return <TermsOfServicePage />;
      case 'HOME':
      default:
        return <HomePage />;
    }
  };

  return (
    <AppProvider value={contextValue}>
      <MainLayout 
        view={view} 
        selectedCategory={selectedCategory}
      >
        {renderContent()}
      </MainLayout>
    </AppProvider>
  );
}

export default App;