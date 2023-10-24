import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "./firebase";

export default async function fetchUserItems(uid) {
  const itemsCollectionRef = collection(db, "items");
  const q = query(itemsCollectionRef, where("uid", "==", uid));

  try {
    const querySnapshot = await getDocs(q);
    const userItems = [];

    querySnapshot.forEach((doc) => {
      userItems.push({ ...doc.data(), id: doc.id });
    });
    return userItems;
  } catch (error) {
    throw new Error(error.message);
  }
}
