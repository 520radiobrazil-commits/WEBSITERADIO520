import React, { createContext, useContext } from 'react';
import { Article } from '../types';
import { View } from '../App';

interface AppContextType {
  articles: Article[];
  isRadioPlaying: boolean;
  toggleRadio: () => void;
  handleUpdateLikes: (articleSlug: string, newLikes: number) => void;
  handleSelectArticle: (articleSlug: string) => void;
  handleSelectCategory: (category: string) => void;
  handleNavigate: (targetView: View) => void;
}

// Cria um contexto com um valor padrão nulo.
// O valor real será fornecido pelo componente App.
const AppContext = createContext<AppContextType | null>(null);

// Hook personalizado para usar o AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = AppContext.Provider;
