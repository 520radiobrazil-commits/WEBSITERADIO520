import React from 'react';
import { useAppContext } from '../context/AppContext';
import ArticleCard from '../components/ArticleCard';
import MostLikedArticles from '../components/MostViewed';
import YouTubePlayer from '../components/YouTubePlayer';
import WebAppAd from '../components/WebAppAd';
import AdPlaceholder from '../components/AdPlaceholder';
import TopHits520 from '../components/FeaturedArticle';
import { Article } from '../types';
import SectionTitle from '../components/SectionTitle';
import AudioPlayer from '../components/AudioPlayer';

// Componente interno para renderizar seções de conteúdo
const ContentSection: React.FC<{title: string; articles: Article[]; topic: 'sport' | 'special'}> = ({ title, articles, topic }) => {
    if (articles.length === 0) return null;

    const featured = articles.find(a => a.isFeatured) || articles[0];
    const others = articles.filter(a => a.slug !== featured.slug).slice(0, 4);
    
    return (
        <section className="mb-12">
            <SectionTitle topic={topic}>{title}</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <ArticleCard article={featured} size="large" />
                </div>
                {others.map(article => <ArticleCard key={article.slug} article={article} />)}
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
    const { articles } = useAppContext();
    
    const sportArticles = articles.filter(a => a.topic === 'sport');
    const specialArticles = articles.filter(a => a.topic === 'special');
    const podcastArticle = articles.find(a => a.audioUrl);
    
    return (
        <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-12">
                    {sportArticles.length > 0 && <ContentSection title="Esportes" articles={sportArticles} topic="sport" />}
                    
                    {specialArticles.length > 0 && <ContentSection title="Especiais" articles={specialArticles} topic="special" />}
                </div>

                <aside className="space-y-8 lg:mt-[88px]">
                    <TopHits520 />
                    {podcastArticle && <AudioPlayer article={podcastArticle} />}
                    <MostLikedArticles />
                    <AdPlaceholder slot="1234567890" />
                    <YouTubePlayer />
                    <WebAppAd />
                </aside>
            </div>
        </div>
    );
};

export default HomePage;