import React from 'react';
import { useAppContext } from '../context/AppContext';
import ArticleCard from '../components/ArticleCard';
import MostLikedArticles from '../components/MostViewed';
import YouTubePlayer from '../components/YouTubePlayer';
import WebAppAd from '../components/WebAppAd';
import AdPlaceholder from '../components/AdPlaceholder';
import TopHits520 from '../components/FeaturedArticle'; // Reutilizando o componente vazio
import { Article } from '../types';

// Componente interno para renderizar seções de conteúdo (Esportes ou Música)
const ContentSection: React.FC<{title: string; articles: Article[]; color: 'cyan' | 'fuchsia'}> = ({ title, articles, color }) => {
    const { handleSelectArticle } = useAppContext();
    if (articles.length === 0) return null;

    const featured = articles.find(a => a.isFeatured) || articles[0];
    const others = articles.filter(a => a.slug !== featured.slug).slice(0, 4);

    const borderColor = color === 'cyan' ? 'border-cyan-500' : 'border-fuchsia-500';
    const hoverShadow = color === 'cyan' ? 'hover:shadow-cyan-500/20' : 'hover:shadow-fuchsia-500/20';
    const featuredCategoryColor = color === 'cyan' ? 'bg-cyan-500 text-gray-900' : 'bg-fuchsia-500 text-white';

    return (
        <section className="mb-12">
            <h2 className={`text-3xl font-black text-white mb-6 border-b-4 pb-2 uppercase tracking-wider ${borderColor}`}>
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Artigo em destaque da seção */}
                 <div 
                    onClick={() => handleSelectArticle(featured.slug)}
                    className={`md:col-span-2 bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row group transition-all duration-300 ease-in-out hover:shadow-2xl ${hoverShadow} hover:-translate-y-1 cursor-pointer`}
                    role="article"
                >
                    <div className="md:w-3/5 relative aspect-video md:aspect-auto">
                         <img
                          src={featured.imageUrl || "/placeholder.jpg"}
                          alt={featured.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                          onError={(e) => { e.currentTarget.src = "/placeholder.jpg"; }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:bg-gradient-to-r md:from-black/60 to-transparent"></div>
                    </div>
                    <div className="md:w-2/5 p-6 flex flex-col justify-center">
                         <p className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider font-heading mb-2 self-start ${featuredCategoryColor}`}>
                            {featured.category}
                        </p>
                        <h3 className="text-2xl text-white font-bold leading-tight mb-2 flex-grow group-hover:text-cyan-300 transition-colors font-heading">
                          {featured.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm flex-grow">{featured.summary}</p>
                        <span className="mt-auto text-sm font-bold text-white self-start group-hover:text-cyan-300 transition-colors">
                            Ler mais &rarr;
                        </span>
                    </div>
                </div>

                {/* Outros artigos da seção */}
                {others.map(article => <ArticleCard key={article.slug} article={article} />)}
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
    const { articles } = useAppContext();
    
    // Filtra artigos por tópico
    const sportArticles = articles.filter(a => a.topic === 'sport');
    const specialArticles = articles.filter(a => a.topic === 'special');
    
    return (
        <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Área de Conteúdo Principal */}
                <div className="lg:col-span-2">
                    {sportArticles.length > 0 && <ContentSection title="Esportes" articles={sportArticles} color="cyan" />}
                    {specialArticles.length > 0 && <ContentSection title="ESPECIAIS" articles={specialArticles} color="fuchsia" />}
                </div>

                {/* Barra Lateral */}
                <aside className="space-y-8 lg:mt-[76px]"> {/* Ajuste de margem para alinhar com o título */}
                    <TopHits520 />
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