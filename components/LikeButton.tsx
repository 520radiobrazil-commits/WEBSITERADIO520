import React, { useState, useEffect } from 'react';

const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

interface LikeButtonProps {
  articleId: string;
  initialLikes: number;
  onUpdateLikes: (articleId: string, newLikes: number) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ articleId, initialLikes, onUpdateLikes }) => {
  const storageKey = `liked_article_${articleId}`;
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    try {
      const likedInStorage = localStorage.getItem(storageKey);
      if (likedInStorage === 'true') {
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Could not read from localStorage", error);
    }
  }, [storageKey]);
  
  // Sync state if initialLikes prop changes from parent
  useEffect(() => {
    setLikes(initialLikes);
  }, [initialLikes]);

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card/link click when liking
    e.preventDefault();

    const newLikedState = !isLiked;
    const newLikesCount = newLikedState ? likes + 1 : likes - 1;
    
    setIsLiked(newLikedState);
    setLikes(newLikesCount);
    onUpdateLikes(articleId, newLikesCount);
    
    // Animate the button
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    try {
      if (newLikedState) {
        localStorage.setItem(storageKey, 'true');
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch (error) {
      console.error("Could not write to localStorage", error);
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500 group ${
        isLiked
          ? 'text-pink-500 bg-pink-500/10'
          : 'text-gray-400 hover:text-white hover:bg-gray-700'
      } ${isAnimating ? 'animate-pulse' : ''}`}
      aria-label={isLiked ? `Descurtir, ${likes} curtidas` : `Curtir, ${likes} curtidas`}
    >
      <HeartIcon filled={isLiked} />
      <span className="font-semibold text-sm">{likes.toLocaleString('pt-BR')}</span>
    </button>
  );
};

export default LikeButton;