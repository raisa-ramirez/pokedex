"use client"
import { PokemonCard } from "@/components";
import { Banner } from "@/components";
import { AppContext } from "@/utils";
import { useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState("")

  return <AppContext.Provider value={{ pokemon, setPokemon }}>
      <Banner />
      <div className="bg-gray-100">
        <PokemonCard />
      </div>
  </AppContext.Provider>
}
