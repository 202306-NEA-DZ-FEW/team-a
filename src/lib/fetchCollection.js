import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";
// Function to fetch data from Firestore
export async function fetchCollection(collectionName, queryParams = {}) {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(collectionRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...JSON.parse(JSON.stringify(doc.data())), id: doc.id });
    });

    let filteredData = data;

    if (queryParams.search && queryParams.search.trim() !== "") {
      filteredData = filteredData.filter((d) =>
        d.title.toLowerCase().includes(queryParams.search.toLowerCase())
      );
    }

    if (queryParams.category) {
      filteredData = filteredData.filter(
        (d) => d.category === queryParams.category
      );
    }

    if (queryParams.location) {
      filteredData = filteredData.filter(
        (d) => d.location === queryParams.location
      );
    }

    if (queryParams.listingType) {
      filteredData = filteredData.filter(
        (d) => d.listingType === queryParams.listingType
      );
    }

    return filteredData;
  } catch (error) {
    // Instead of returning an error object, you can log the error and return an empty array.
    return [];
  }
}
