import React, { useState } from "react";
import ShowPokemonCard from "../PokemonCard/ShowPokemonCard";
import Swal from "sweetalert2";
import { fetchShowData } from "../../fetchData";
import { inputSchema } from "../../Validation/inputValidation";
import SearchInput from "./SearchInput";

const SearchComponent = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const showData = async () => {
    try {
      await inputSchema.validate({ input: pokemonName }); //validates input

      const data = await fetchShowData(`${URL}${pokemonName.toLowerCase()}`);

      setPokemon({
        name: pokemonName,
        species: data.species.name, 
        weight: data.weight,
        height: data.height,
        types: data.types.map((element) => element.type.name),
        abilities: data.abilities.map((ability) => ability.ability.name),
        Pic: data.sprites.other.home.front_default,
        id: data.id,
      });
    } catch (error) {
      Swal.fire({
        title: "No pokemon found",
        text: error.message,
        confirmButtonText: "<p style='color:#ffffff'>Ok</p>",
        icon: "warning",
        iconColor: "red",
        confirmButtonColor: "gray",
      });
    }
  };

  return (
    <div className="container align-content-center">
      <SearchInput
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        showData={showData}
      />

      {pokemon && <ShowPokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default SearchComponent;
