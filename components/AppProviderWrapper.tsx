'use client';
import { useState } from 'react';
import { AppContext } from '@/utils';
import { SinglePokemon } from '@/interfaces';

const AppProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [pokemon, setPokemon] = useState<SinglePokemon | ''>('');

  return (
    <AppContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProviderWrapper;
