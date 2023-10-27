import { collection, getDocs } from "firebase/firestore";

import { db } from "@/lib/firebase";

// Function to fetch data from Firestore
export async function fetchCollection(collectionName, queryParams = null) {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(collectionRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
    });

    const filtredData = data
      .filter((d) =>
        queryParams.search
          ? d.title.toLowerCase().includes(queryParams.search.toLowerCase())
          : true
      )
      .filter((d) =>
        queryParams.category ? d.category === queryParams.category : true
      )
      .filter((d) =>
        queryParams.location ? d.location === queryParams.location : true
      )
      .filter((d) =>
        queryParams.listingType
          ? d.listingType === queryParams.listingType
          : true
      );

    return filtredData;
  } catch (error) {
    throw new Error(error);
  }
}
