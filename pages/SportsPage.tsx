import React from 'react';
import { useAppContext } from '../context/AppContext';
import ArticleCard from '../components/ArticleCard';
import SectionTitle from '../components/SectionTitle';

const SportsPage: React.FC = () => {
    const { articles } = useAppContext();
    const sportArticles = articles.filter(a => a.topic === 'sport');
    
    return (
        <div className="animate-fade-in">
            <SectionTitle>Esportes</SectionTitle>

            {sportArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {sportArticles.map(article => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 mt-6">Nenhum artigo de esporte encontrado.</p>
            )}
        </div>
    );
};

export default SportsPage;