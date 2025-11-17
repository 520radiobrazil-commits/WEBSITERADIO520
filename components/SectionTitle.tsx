import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-black text-white mb-6 border-b-4 pb-2 uppercase tracking-widest" style={{ borderImage: 'var(--brand-gradient) 1' }}>
      {children}
    </h2>
  );
};

export default SectionTitle;