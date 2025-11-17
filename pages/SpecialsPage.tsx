import React from 'react';
import { useAppContext } from '../context/AppContext';
import ArticleCard from '../components/ArticleCard';
import SectionTitle from '../components/SectionTitle';

const SpecialsPage: React.FC = () => {
    const { articles } = useAppContext();
    const specialArticles = articles.filter(a => a.topic === 'special');
    
    return (
        <div className="animate-fade-in">
            <SectionTitle topic="special">Especiais</SectionTitle>

            {specialArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {specialArticles.map(article => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 mt-6">Nenhum artigo especial encontrado.</p>
            )}
        </div>
    );
};

export default SpecialsPage;