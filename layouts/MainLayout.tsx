import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { View } from '../App';

interface MainLayoutProps {
  children: React.ReactNode;
  view: View;
  selectedCategory: string | null;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, view, selectedCategory }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c131d]">
      <Header currentView={view} activeCategory={selectedCategory} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
