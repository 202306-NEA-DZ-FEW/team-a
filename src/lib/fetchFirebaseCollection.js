import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";

export default async function fetchFirebaseCollection(collectionName) {
  const itemsCollectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ ...JSON.parse(JSON.stringify(doc.data())), id: doc.id });
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
