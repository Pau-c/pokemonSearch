import { addDoc, collection, getFirestore} from "firebase/firestore";


export const addFavorite = async (user, pokemonName) => {
  try {
    const db = getFirestore();
    await addDoc(collection(db, "favorite"), {
      name: pokemonName,
      userId: user.uid,
    });
  } catch (e) {
    console.error("Error adding favorite: ", e);
  }
};
