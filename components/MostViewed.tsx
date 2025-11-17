import React from 'react';
import { useAppContext } from '../context/AppContext';

const HeartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

const MostLikedArticles: React.FC = () => {
  const { articles, handleSelectArticle } = useAppContext();
  
  const mostLikedArticles = [...articles]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 5);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider flex items-center font-heading">
        <HeartIcon className="h-5 w-5 mr-2 text-pink-500"/>
        Mais Curtidas
      </h3>
      {mostLikedArticles.length > 0 ? (
        <ul className="space-y-2">
          {mostLikedArticles.map((article, index) => (
              <li key={article.slug}>
                <button
                  onClick={() => handleSelectArticle(article.slug)}
                  className="w-full text-left p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-black text-gray-600 group-hover:text-pink-400 transition-colors duration-200">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-white font-semibold leading-tight group-hover:text-pink-300 transition-colors duration-200">
                        {article.title}
                      </p>
                      <div className="flex items-center text-pink-400 text-xs mt-1">
                        <HeartIcon className="h-4 w-4 mr-1"/>
                        <span className="font-bold">{article.likes || 0} curtidas</span>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">Não há artigos curtidos no momento.</p>
      )}
    </div>
  );
};

export default MostLikedArticles;