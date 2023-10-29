import { doc, getDoc } from "firebase/firestore";

import { db } from "./firebase";

export default async function fetchFirebaseDoc(collectionName, id) {
  const docRef = doc(db, collectionName, id);

  try {
    const doc = await getDoc(docRef);
    if (doc.exists()) {
      const data = JSON.parse(JSON.stringify(doc.data()));
      return {
        ...data,
      };
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
