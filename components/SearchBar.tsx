"use client"

import { InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react"; 
import { AppContext, getData, getPokemon, sortData } from "@/utils";

const SearchBar = () => {  
    const context = useContext(AppContext) 
    const [data, setData] = useState([])  
    const [selected, setSelected] = useState("")  

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(100)
            setData(sortData(data.results))

            if(data.results.length > 0 && selected === ""){
                setSelected(data.results[36].name)
            }
        }
        fetchData()
    },[])
    

    useEffect(() => {
        searchPokemon()
    },[selected])

    const searchPokemon = async () => {
        if(selected==="") return;

        console.log('Searching...')
        const data = await getPokemon(selected)
        context?.setPokemon(data)
    }

    return <form action="">
        <InputLabel id="demo-select-small-label" className="mb-4 text-center">Select a pokemon</InputLabel>
        <div className="flex justify-center items-center gap-1">
            <div>
                <Select
                    sx={{width: '200px'}}
                    className="select-pokemon"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    {
                        data.length > 0 &&
                        data.map((pokemon:any) => 
                        <MenuItem key={pokemon.name} value={pokemon.name} className="item-pokemon">
                            {pokemon.name}
                        </MenuItem>)
                    }            
                </Select>
            </div>
        </div>
    </form>
}

export default SearchBar;