import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  topic?: 'sport' | 'special';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, topic = 'sport' }) => {
  const textGradientClass = topic === 'sport'
    ? 'from-teal-400 to-cyan-400'
    : 'from-amber-400 to-orange-500';
  
  const borderGradient = topic === 'sport'
    ? 'linear-gradient(to right, #2dd4bf, #38bdf8)' // teal to sky blue
    : 'linear-gradient(to right, #facc15, #f97316)'; // amber to orange

  return (
    <h2 
      className={`text-4xl font-black mb-6 border-b-4 pb-2 uppercase tracking-widest bg-gradient-to-r ${textGradientClass} bg-clip-text text-transparent`}
      style={{ borderImage: `${borderGradient} 1` }}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;