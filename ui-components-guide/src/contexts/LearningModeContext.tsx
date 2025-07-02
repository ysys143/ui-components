import React, { createContext, useContext, useState } from 'react';

interface LearningModeContextType {
  isLearningMode: boolean;
  toggleLearningMode: () => void;
}

const LearningModeContext = createContext<LearningModeContextType | undefined>(undefined);

export const LearningModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLearningMode, setIsLearningMode] = useState(true);

  const toggleLearningMode = () => {
    setIsLearningMode(prev => !prev);
  };

  return (
    <LearningModeContext.Provider value={{ isLearningMode, toggleLearningMode }}>
      {children}
    </LearningModeContext.Provider>
  );
};

export const useLearningMode = () => {
  const context = useContext(LearningModeContext);
  if (!context) {
    throw new Error('useLearningMode must be used within a LearningModeProvider');
  }
  return context;
};