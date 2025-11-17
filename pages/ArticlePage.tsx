import React from 'react';
import { Article } from '../types';
import { useAppContext } from '../context/AppContext';
import { formatFullDateTime, calculateReadTime } from '../utils/time';
import ShareButtons from '../components/ShareButtons';
import Comments from '../components/Comments';
import LikeButton from '../components/LikeButton';
import ArticleCard from '../components/ArticleCard';
import SectionTitle from '../components/SectionTitle';
import AdPlaceholder from '../components/AdPlaceholder';

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
    const { articles, handleUpdateLikes } = useAppContext();
    const relatedArticles = articles.filter(a => a.category === article.category && a.slug !== article.slug).slice(0, 3);
    const readTime = calculateReadTime(article.content);
    
    return (
        <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <article className="lg:col-span-8">
                    <header className="mb-6">
                        <p className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-2 font-heading">{article.category}</p>
                        <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight font-heading">{article.title}</h1>
                        <p className="text-lg text-gray-400">{article.summary}</p>
                        <div className="mt-4 text-sm text-gray-500 flex items-center flex-wrap gap-x-4 gap-y-2">
                            <span>Por <strong>{article.author}</strong></span>
                            <time dateTime={article.publishedAt}>
                                Publicado em {formatFullDateTime(article.publishedAt)}
                            </time>
                            {readTime && <span>{readTime}</span>}
                        </div>
                    </header>
                    
                    {article.videoUrl ? (
                         <div className="mb-6 rounded-lg overflow-hidden aspect-video bg-black">
                            <video key={article.videoUrl} className="w-full h-full object-contain" controls>
                                <source src={article.videoUrl} type="video/mp4" />
                            </video>
                         </div>
                    ) : (
                         <figure className="mb-6 rounded-lg overflow-hidden">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover" />
                        </figure>
                    )}
                   
                    <div className="prose-custom text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }} />

                    <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <LikeButton 
                            articleId={article.slug}
                            initialLikes={article.likes || 0}
                            onUpdateLikes={handleUpdateLikes}
                        />
                        <ShareButtons article={article} />
                    </div>

                    <div className="mt-12">
                        <Comments articleId={article.slug} />
                    </div>

                    <div className="mt-12">
                        <a 
                            href="mailto:520radiobrazil@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block rounded-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
                            aria-label="Anuncie na Rádio 520 - Clique para enviar um email"
                        >
                            <img 
                                src="https://public-rf-upload.minhawebradio.net/249695/ad/32dc318f7254d01a058188801d808ff5.png" 
                                alt="Banner de anúncio da Rádio 520" 
                                className="w-full h-auto"
                            />
                        </a>
                    </div>
                </article>
                
                <aside className="lg:col-span-4 space-y-8">
                    <AdPlaceholder slot="9876543210" />
                    {relatedArticles.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Relacionados</h3>
                            <div className="space-y-4">
                                {relatedArticles.map(rel => <ArticleCard key={rel.slug} article={rel} />)}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default ArticlePage;