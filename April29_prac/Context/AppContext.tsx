import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
type User = {
  name: string;
};

type Theme = 'light' | 'dark';

type AppContextType = {
  user: User;
  theme: Theme;
  toggleTheme: () => void;
  updateName: (name: string) => void;
};

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Props
type Props = {
  children: ReactNode;
};

// Provider Component
export const AppProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({ name: 'Khushi' });
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const updateName = (name: string) => {
    setUser({ name });
  };

  return (
    <AppContext.Provider value={{ user, theme, toggleTheme, updateName }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook 
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
};