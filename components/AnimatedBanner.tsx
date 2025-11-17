import React, { useState, useEffect } from 'react';

const phrases = [
  "TUDO SOBRE SEU ESPORTE FAVORITO",
  "EVERYTHING ABOUT YOUR FAVORITE SPORT",
  "TOUT SUR VOTRE SPORT PRÉFÉRÉ",
  "ALLES ÜBER DEINEN LIEBLINGSSPORT",
  "TUTTO SUL TUO SPORT PREFERITO",
  "关于你最喜欢的运动的一切"
];

const AnimatedBanner: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-800/50 text-center py-3 mb-8 rounded-md overflow-hidden">
      <h2 
        className={`font-heading font-bold text-base sm:text-lg uppercase tracking-wider transition-opacity duration-500 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent ${isFading ? 'opacity-0' : 'opacity-100'}`}
        style={{ minHeight: '28px' }}
      >
        {phrases[index]}
      </h2>
    </div>
  );
};

export default AnimatedBanner;
