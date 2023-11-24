import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "./firebase";
export async function fetchItemsByCategory(collectionName, category) {
  try {
    const data = [];
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ ...JSON.parse(JSON.stringify(doc.data())), id: doc.id });
    });
    return data;
  } catch (error) {
    return [];
  }
}
