import { Dispatch, SetStateAction } from "react";

export interface AppContextProps {
    pokemon: any;
    setPokemon: Dispatch<SetStateAction<PokemonProps>>;
}

export interface PokemonProps {
    name: string;
    types: string[];
    moves: React.JSX.Element[];
    image: string;
    stats: string[];
}