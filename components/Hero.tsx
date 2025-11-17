import React from 'react';
import { Article } from '../types';
import { useAppContext } from '../context/AppContext';
import { calculateReadTime, formatShortDate } from '../utils/time';
import LikeButton from './LikeButton';

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
);

const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);


interface HeroProps {
  article: Article;
}

const Hero: React.FC<HeroProps> = ({ article }) => {
  const { handleSelectArticle, handleUpdateLikes } = useAppContext();
  const readTime = calculateReadTime(article.content);
  const validImageUrl = article.imageUrl?.trim() ? article.imageUrl : "/placeholder.jpg";

  return (
    <div 
      className="relative mb-8 rounded-lg overflow-hidden shadow-2xl bg-gray-800"
      role="region"
      aria-label="Artigo em Destaque"
    >
      <div className="absolute inset-0">
        {article.videoUrl ? (
          <video
            key={article.videoUrl}
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline
          >
            <source src={article.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={validImageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "/placeholder.jpg"; }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="relative p-6 md:p-8 flex flex-col justify-end min-h-[400px] md:min-h-[500px]">
        <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg shadow-cyan-500/50 z-10 font-heading">
            Destaque
        </div>
        <p className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-2 font-heading">{article.category}</p>
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-3 leading-tight font-heading drop-shadow-md">
          {article.title}
        </h2>
        <p className="text-gray-200 text-base lg:text-lg mb-6 max-w-3xl drop-shadow">
            {article.summary}
        </p>
         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <LikeButton
                    articleId={article.slug}
                    initialLikes={article.likes || 0}
                    onUpdateLikes={handleUpdateLikes}
                />
                <div className="text-sm text-gray-300 flex flex-wrap items-center gap-x-2">
                    <span>Por {article.author}</span>
                    <span className="text-gray-500 hidden sm:inline">&bull;</span>
                    <time dateTime={article.publishedAt} className="hidden sm:inline">
                        {formatShortDate(article.publishedAt)}
                    </time>
                    {readTime && (
                      <>
                        <span className="text-gray-500 hidden sm:inline">&bull;</span>
                        <div className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            <span>{readTime}</span>
                        </div>
                      </>
                    )}
                </div>
            </div>
            <button
                onClick={() => handleSelectArticle(article.slug)}
                className="inline-flex items-center justify-center text-sm font-bold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-gray-900 px-5 py-2.5 rounded-md transition-all duration-200 font-heading shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105"
            >
                LEIA MAIS
                <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;