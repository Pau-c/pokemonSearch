import { query, where, collection } from "firebase/firestore";

//for pokemon card
export const favoriteQuery = (db, user, pokemonName) => {
  return query(
    collection(db, "favorite"),
    where("userId", "==", user.uid),
    where("name", "==", pokemonName),
  );
};
//for favorites page get all favorites from the user
export const allFavoritesQuery = (db, user) => {
  return query(
    collection(db, "favorite"),
    where("userId", "==", user.uid),
  
  );
};