import { getDocs, deleteDoc, getFirestore } from "firebase/firestore";
import { favoriteQuery } from "./getFavorites";

export const deleteFavorite = async (user, pokemonName) => {
  try {
    const db = getFirestore();

    const querySnapshot = await getDocs(favoriteQuery(db, user, pokemonName));

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  } catch (e) {
    console.error("Delete error: ", e);
  }
};
