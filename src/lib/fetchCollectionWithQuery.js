import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

import { db } from "./firebase";

export async function fetchCollectionWithQuery(
  collectionName,
  queryParams = {},
  pageSize = 4,
  page = 1
) {
  const collectionRef = collection(db, collectionName);

  // Determine the startAfterDoc based on the page number
  let startAfterDoc = null;
  if (page > 1) {
    // Fetch the last document of the previous page to determine the startAfterDoc
    const lastItemSnapshot = await getDocs(
      query(
        collectionRef,
        orderBy(queryParams.search ? "title" : "createdAt", "desc"),
        ...buildFilters(queryParams),
        limit((page - 1) * pageSize + 1)
      )
    );

    const lastItemDocs = lastItemSnapshot.docs;
    if (lastItemDocs.length > 0) {
      startAfterDoc = lastItemDocs[lastItemDocs.length - 1];
    }
  }

  let q = collectionRef;

  // Apply filters based on queryParams
  q = query(
    q,
    orderBy(queryParams.search ? "title" : "createdAt", "desc"),
    ...buildFilters(queryParams)
  );

  if (
    startAfterDoc &&
    !queryParams.search &&
    !queryParams.location &&
    !queryParams.category
  ) {
    q = query(q, startAfter(startAfterDoc));
  }

  q = query(q, limit(pageSize));

  try {
    const querySnapshot = await getDocs(q);
    let totalItems = 0;

    //get all items count
    if (Object.entries(queryParams).length !== 0 && !queryParams.page) {
      totalItems = (await getDocs(q)).size;
    } else {
      totalItems = (await getDocs(collectionRef)).size;
    }

    const totalPages = Math.ceil(totalItems / pageSize);

    const items = [];

    querySnapshot.forEach((doc) => {
      items.push({ ...JSON.parse(JSON.stringify(doc.data())), id: doc.id });
    });

    return { items, totalPages, totalItems };
  } catch (e) {
    return [];
  }
}

// Helper function to build filters based on queryParams
function buildFilters(queryParams) {
  const filters = [];

  if (queryParams.search) {
    const searchValue = queryParams.search.toLowerCase();
    filters.push(
      where("title", ">=", searchValue),
      where("title", "<=", `${searchValue}\uf7ff`)
    );
  }

  if (queryParams.location) {
    filters.push(where("location", "==", queryParams.location));
  }

  if (queryParams.category) {
    filters.push(where("category", "==", queryParams.category));
  }

  if (queryParams.listingType) {
    filters.push(where("listingType", "==", queryParams.listingType));
  }

  if (queryParams.createdAt) {
    filters.push(where("createdAt", "==", queryParams.createdAt));
  }

  return filters;
}
