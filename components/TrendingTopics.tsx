import React from 'react';
import { Article } from '../types';

interface TrendingTopicsProps {
  latestArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ latestArticles, onSelectArticle }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Últimos Destaques</h3>
      {latestArticles.length > 0 ? (
        <ul className="space-y-2">
          {latestArticles.map((article, index) => (
            <li key={article.slug}>
              <button
                onClick={() => onSelectArticle(article)}
                className="w-full text-left p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-gray-600 group-hover:text-teal-400 transition-colors duration-200">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {article.category}
                    </span>
                    <p className="text-white font-semibold leading-tight group-hover:text-teal-300 transition-colors duration-200">
                      {article.title}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">Não há destaques no momento.</p>
      )}
    </div>
  );
};

export default TrendingTopics;