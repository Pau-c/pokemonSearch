import React, { useEffect, useState } from "react";
import { useAuth } from "../Components/context/AuthContext";
import {
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { allFavoritesQuery } from "../Components/PokemonCard/favorites/getFavorites";
import NavBar from "../Components/Nav/NavBar";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import Content from "../Components/FavoritesContent";


const FavoritesList = () => {
  const { user } = useAuth(); // Brings user from context
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const db = getFirestore();
          const querySnapshot = await getDocs(allFavoritesQuery(db, user));
          const allFavoritesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFavorites(allFavoritesData);
        } catch (e) {
          console.error("Couldn't get favorites: ", e);
          Swal.fire("Couldn't get favorites") };
      }
    };

    fetchFavorites();
  }, [user]);

  const handleDeleteFavorite = async (favoriteId) => {
    try {
      const db = getFirestore();
      const favoriteRef = doc(db, "favorite", favoriteId);
      await deleteDoc(favoriteRef);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== favoriteId)
      );
    } catch (e) {
      console.error("Error deleting favorite: ", e);
      Swal.fire("Couldn't delete favorites");
    }
  };



  return (
    <>
      <NavBar />
      <Container className="w-25 p-3 mt-3 w-auto">
        <Content favorites={favorites} handleDeleteFavorite={handleDeleteFavorite}/>
      </Container>
    </>
  );
}

export default FavoritesList;