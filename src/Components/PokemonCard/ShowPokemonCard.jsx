import React, { useState, useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import { checkFavoriteStatus } from "./favorites/checkFavoriteStatus";
import { addFavorite } from "./favorites/addFavorite";
import { deleteFavorite } from "./favorites/deleteFavorite";
import Swal from "sweetalert2";
import "../../App.css"
import PokemonCard from "./PokemonCard"

//checks favorite states and passes off props to pokemoncard

export default function Pokemon(props) {
  const { user } = useAuth(); // Bring user from context
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, [props.pokemon.name]);

  const checkFavorite = async () => {
    if (user) {
      const favoriteExists = await checkFavoriteStatus(user, props.pokemon.name);
      setIsFavorite(favoriteExists);
    }
  };

  
  const handleFavoriteToggle = async () => {
    if (user) {
      if (isFavorite) {
        await deleteFavorite(user, props.pokemon.name);
        setIsFavorite(false);
      } else {
        await addFavorite(user, props.pokemon.name);
        setIsFavorite(true);
      }
    } else {
      Swal.fire("You can't do that, log in first");
    }
  };
  useEffect(() => {
    checkFavorite();
  }, [props.pokemon.name, user]); // Add `user` as a dependency

  return (

    <>

    <PokemonCard pokemon={props.pokemon} isFavorite={isFavorite} handleFavoriteToggle={handleFavoriteToggle}  />
 </>
  );
}
