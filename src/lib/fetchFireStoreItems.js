import { collection, getDocs } from "firebase/firestore";

import { db } from "@/lib/firebase";

// Function to fetch data from Firestore
export async function fetchFirestoreData(collectionName) {
  try {
    const itemsRef = collection(db, collectionName);
    const querySnapshot = await getDocs(itemsRef);

    const collectionData = [];
    querySnapshot.forEach((doc) => {
      collectionData.push({ id: doc.id, ...doc.data() });
    });

    return collectionData;
  } catch (error) {
    console.error(
      `Error fetching data from Firestore collection '${collectionName}': `,
      error
    );
    return [];
  }
}
