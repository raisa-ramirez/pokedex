"use client"

import { IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react"; 
import { SearchRounded } from '@mui/icons-material';

const SearchBar = () => {
    const data = [
        {id: 1, title: 'Pikachu'},
        {id: 2, title: 'Pidgeotto'},
        {id: 3, title: 'Caterpie'}
    ]
    const [pokemon, setPokemon] = useState(data[1].id)  

    const searchPokemon = () => {
        console.log('Buscando...')
    }

    return <form action="">
        <InputLabel id="demo-select-small-label" className="mb-4">Select your pokemon</InputLabel>
        <div className="flex justify-center items-center gap-1">
            <div>
                <Select
                    className="select-pokemon"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={pokemon}
                    onChange={(e) => setPokemon(Number(e.target.value))}
                >
                    {
                    data.map((pokemon) => 
                    <MenuItem key={pokemon.id} value={pokemon.id} className="item-pokemon">
                        {pokemon.title}
                    </MenuItem>)
                    }            
                </Select>
            </div>

            <div>
                <IconButton 
                onClick={() => searchPokemon()}
                aria-label="search" 
                color="success" 
                size="large" 
                sx={{height:'3.25rem'}}>
                    <SearchRounded fontSize="medium" color="info"/>
                </IconButton>
            </div>
        </div>
    </form>
}

export default SearchBar;