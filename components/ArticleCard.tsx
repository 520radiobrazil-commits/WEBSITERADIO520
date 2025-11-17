import React, { memo } from 'react';
import { Article } from '../types';
import { calculateReadTime, formatShortDate } from '../utils/time';
import LikeButton from './LikeButton';
import { useAppContext } from '../context/AppContext';

const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

interface ArticleCardProps {
  article: Article;
  size?: 'normal' | 'large';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, size = 'normal' }) => {
  const { handleSelectArticle, handleUpdateLikes } = useAppContext();
  const readTime = calculateReadTime(article.content);
  const validImageUrl = article.imageUrl?.trim() ? article.imageUrl : "/placeholder.jpg";
  const isLarge = size === 'large';

  const categoryColorClass = article.topic === 'sport'
    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900'
    : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white';

  const hoverShadowClass = article.topic === 'sport'
    ? 'hover:shadow-cyan-500/20'
    : 'hover:shadow-fuchsia-500/20';


  return (
    <div 
      onClick={() => handleSelectArticle(article.slug)}
      className={`bg-gray-800 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl ${hoverShadowClass} hover:-translate-y-1 cursor-pointer ${isLarge ? 'md:col-span-2' : ''}`}
      role="article"
      aria-labelledby={`article-title-${article.slug}`}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={validImageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          onError={(e) => { e.currentTarget.src = "/placeholder.jpg"; }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <p className={`absolute top-3 left-3 ${categoryColorClass} text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider font-heading`}>
          {article.category}
        </p>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 id={`article-title-${article.slug}`} className={`text-white font-bold leading-tight mb-2 flex-grow group-hover:text-cyan-300 transition-colors font-heading ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {article.title}
        </h3>
        {isLarge && <p className="text-gray-400 mb-4 text-base">{article.summary}</p>}
        <div className="mt-auto flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <time dateTime={article.publishedAt}>
                {formatShortDate(article.publishedAt)}
            </time>
            {readTime && (
              <>
                <span className="text-gray-600">&bull;</span>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
              </>
            )}
          </div>
          <LikeButton 
            articleId={article.slug}
            initialLikes={article.likes || 0}
            onUpdateLikes={(id, likes) => handleUpdateLikes(id, likes)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCard);