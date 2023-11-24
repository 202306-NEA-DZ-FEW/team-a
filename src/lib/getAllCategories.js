export default function getAllCategories(t) {
  const categoriesKeys = [
    "babyItems",
    "blanketsAndBedding",
    "books",
    "clothes",
    "accessories",
    "craftSupplies",
    "decorAndArtwork",
    "electronics",
    "foodAndNonPerishables",
    "householdItems",
    "hygieneProducts",
    "medicalSupplies",
    "petSupplies",
    "schoolAndEducationalSupplies",
    "shoes",
    "sportsEquipment",
    "toysAndGames",
  ];

  const categoryImages = {
    babyItems:
      "https://images.unsplash.com/photo-1567822781105-a80d1b601697?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    clothes:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blanketsAndBedding:
      "https://images.unsplash.com/photo-1674475761156-9c6c149b4d02?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    books:
      "https://images.unsplash.com/photo-1667929048193-4fef49b0ba0a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accessories:
      "https://images.unsplash.com/photo-1617048931430-5eb626d81e71?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    craftSupplies:
      "https://images.unsplash.com/photo-1669309211906-9ae91cdcf84f?auto=format&fit=crop&q=80&w=2067&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    decorAndArtwork:
      "https://images.unsplash.com/photo-1610565463065-62a684aea256?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    electronics:
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&q=80&w=1926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    foodAndNonPerishables:
      "https://images.unsplash.com/photo-1653012603503-07d9ea4fdb57?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    householdItems:
      "https://images.unsplash.com/photo-1523367438061-01c055ce790c?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hygieneProducts:
      "https://images.unsplash.com/photo-1589060040843-7a31813e6fb0?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    medicalSupplies:
      "https://images.unsplash.com/photo-1587854680352-936b22b91030?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    petSupplies:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=2043&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schoolAndEducationalSupplies:
      "https://images.unsplash.com/photo-1674241832951-c2db337fd3f5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shoes:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sportsEquipment:
      "https://images.unsplash.com/photo-1574379989050-bfd9e1a8a543?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    toysAndGames:
      "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const categoryList = categoriesKeys.map((dataKey, index) => {
    return {
      id: index,
      name: t(`categories:${dataKey}`),
      dataKey,
      imageURL: categoryImages[dataKey],
    };
  });
  return categoryList;
}
