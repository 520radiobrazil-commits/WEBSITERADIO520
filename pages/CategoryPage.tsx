import React from 'react';
import { useAppContext } from '../context/AppContext';
import ArticleCard from '../components/ArticleCard';
import SectionTitle from '../components/SectionTitle';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
    const { articles } = useAppContext();
    const categoryArticles = articles.filter(a => a.category === category);
    
    return (
        <div className="animate-fade-in">
            <SectionTitle>{category}</SectionTitle>

            {categoryArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {categoryArticles.map(article => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 mt-6">Nenhum artigo encontrado nesta categoria.</p>
            )}
        </div>
    );
};

export default CategoryPage;
