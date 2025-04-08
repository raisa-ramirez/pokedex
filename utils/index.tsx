import { createContext } from 'react';
import { AppContextProps, Moves, Pokemon } from '@/interfaces';
import { Chip } from '@mui/material';

const AppContext = createContext<AppContextProps | null>(null);

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

async function getData<T>(limit: number): Promise<T> {
  const data = await fetch(`${baseUrl}?limit=${limit}`);

  return data.json() as T;
}

async function getPokemon<T>(pokemon: string): Promise<T> {
  const data = await fetch(`${baseUrl}/${pokemon}`);

  return data.json() as T;
}

const transformArray = (stats: any[]) => {
  let array = stats.toSorted((a, b) => a.name.localeCompare(b.name));
  array = array.map((item) => ({
    name: (item.name.charAt(0).toUpperCase() + item.name.slice(1)).replace(
      '-',
      ' '
    ),
    value: item.value,
    image: item.name.replace(' ', '-') + '.png'
  }));

  return array;
};

const moveChips = (moves: Moves[]) => {
  let chipMoves = [];
  let size = moves.length > 8 ? 6 : moves.length;
  for (let index = 0; index < size; index++) {
    chipMoves.push(
      <Chip label={moves[index]} key={index} variant="outlined" color="info" />
    );
  }

  return chipMoves;
};

const sortData = (lst: Pokemon[]) => {
  return lst.toSorted((a: any, b: any) => a.name.localeCompare(b.name));
};

export { getData, getPokemon, AppContext, transformArray, moveChips, sortData };
