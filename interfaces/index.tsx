import { Dispatch, SetStateAction } from 'react';

export interface AppContextProps {
  pokemon: SinglePokemon | '';
  setPokemon: Dispatch<SetStateAction<SinglePokemon | ''>>;
}

export interface PokemonProps {
  name: string;
  types: string[];
  moves: React.JSX.Element[];
  image: string | null;
  stats: string[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[] | [];
}

interface BasicObject {
  name: string;
  url: string;
}

interface Abilities {
  ability: BasicObject[];
  is_hidden: boolean;
  slot: number;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface GameIndices {
  game_index: number;
  version: BasicObject;
}

interface HeldItems {
  item: BasicObject;
  version_details: { rarity: number; version: BasicObject }[];
}

export interface Moves {
  move: BasicObject;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: BasicObject;
    order: string | null;
    version_group: BasicObject;
  }[];
}

interface OtherUrls {
  front_default: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
}

interface Other {
  dream_world: OtherUrls;
  home: OtherUrls;
  'official-artwork': OtherUrls;
  showdown: OtherUrls;
}

interface SpriteUrls {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  back_transparent?: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  front_transparent?: string | null;
  animated?: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface Versions {
  'generation-i': {
    'red-blue': SpriteUrls;
    yellow: SpriteUrls;
  };
  'generation-ii': {
    crystal: SpriteUrls;
    gold: SpriteUrls;
    silver: SpriteUrls;
  };
  'generation-iii': {
    emerald: SpriteUrls;
    'firered-leafgreen': SpriteUrls;
    'ruby-sapphire': SpriteUrls;
  };
  'generation-iv': {
    'diamond-pearl': SpriteUrls;
    'heartgold-soulsilver': SpriteUrls;
    platinum: SpriteUrls;
  };
  'generation-v': {
    'black-white': SpriteUrls;
  };
  'generation-vi': {
    'omegaruby-alphasapphire': SpriteUrls;
    'x-y': SpriteUrls;
  };
  'generation-vii': {
    icons: {
      front_default: string;
      front_female: string | null;
    };
    'ultra-sun-ultra-moon': SpriteUrls;
  };
  'generation-viii': {
    icons: {
      front_default: string;
      front_female: string | null;
    };
  };
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Other;
  versions: Versions;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: BasicObject;
}

interface Types {
  slot: number;
  type: BasicObject;
}

export interface SinglePokemon {
  abilities: Abilities[];
  base_experience: number;
  cries: Cries;
  forms: BasicObject[];
  game_indices: GameIndices[];
  height: number;
  held_items: HeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: BasicObject;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}
