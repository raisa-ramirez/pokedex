'use client';
import { useState } from 'react';
import { AppContext } from '@/utils';

const AppProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [pokemon, setPokemon] = useState('');

  return (
    <AppContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProviderWrapper;
