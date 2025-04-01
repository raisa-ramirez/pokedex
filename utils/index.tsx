import { createContext } from "react"
import { AppContextProps } from "@/interfaces"
import { Chip } from "@mui/material"

const AppContext = createContext<AppContextProps | null>(null);

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const getData = async (limit:number) => {
    const data = await fetch(`${baseUrl}?limit=${limit}`)
    
    return data.json()
}

const getPokemon = async (pokemon:string) => {
    const data = await fetch(`${baseUrl}/${pokemon}`)

    return data.json()
}

const transformArray = (stats:any[]) => {
    let array = stats.toSorted((a,b) => a.name.localeCompare(b.name))
    array = array.map((item) => ({
        name: (item.name.charAt(0).toUpperCase()+item.name.slice(1)).replace("-"," "), 
        value: item.value,
        image: item.name.replace(' ','-') + '.png'
    }))

    return array
}

const moveChips = (moves:[]) => {
    let chipMoves = []
    let size = (moves.length>8)?6:moves.length
    for (let index = 0; index < size; index++) {                            
        chipMoves.push(<Chip label={moves[index]} key={index} variant="outlined" color="info"/>)            
    }

    return chipMoves;
}

const sortData = (lst:[]) => {
    return lst.toSorted((a:any,b:any) => a.name.localeCompare(b.name))
}

export {
    getData,
    getPokemon,
    AppContext,
    transformArray,
    moveChips,
    sortData
}