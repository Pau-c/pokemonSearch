import React, { useState, useEffect } from "react";
import ShowPokemonCard from '../Components/PokemonCard/ShowPokemonCard';
import { fetchShowData } from '../fetchData';
import NavBar from "../Components/Nav/NavBar";

const GetPokemon = () => {
  const [showData, setShowData] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  // get id from URL
  const urlPath = window.location.pathname;
  const pokemonId = urlPath.substring(urlPath.lastIndexOf("/") + 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShowData(`${URL}${pokemonId}`);
        setShowData(data);
        console.log("showData:", data);

        setPokemon({
          name: data.name,
          species: data.species.name,
          weight: data.weight,
          height: data.height,
          types: data.types.map((element) => element.type.name),
          abilities: data.abilities.map((ability) => ability.ability.name),
          Pic: data.sprites.other.home.front_default,
          id: data.id,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pokemonId]);

  return (
    <div>
      <NavBar/>
      {pokemon && <ShowPokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default GetPokemon;
