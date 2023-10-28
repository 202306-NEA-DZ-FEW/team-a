export default function getAllCategories(t) {
  const categoriesKeys = [
    "babyItems",
    "blanketsAndBedding",
    "books",
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
    blanketsAndBedding:
      "https://images.unsplash.com/photo-1692561141101-c1528235e6bf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    books:
      "https://images.unsplash.com/photo-1585244759837-5bb4b3a6919c?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accessories:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    craftSupplies:
      "https://images.unsplash.com/photo-1609446154807-d56805f0e007?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    decorAndArtwork:
      "https://images.unsplash.com/photo-1650138185915-6e1cb9aa3ae4?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    electronics:
      "https://images.unsplash.com/photo-1530545233050-3f0a5d0dd1ac?auto=format&fit=crop&q=80&w=1852&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    foodAndNonPerishables:
      "https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    householdItems:
      "https://images.unsplash.com/photo-1604762433261-a046add6fc11?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hygieneProducts:
      "https://images.unsplash.com/photo-1556227702-5ec9eb8df3ff?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    medicalSupplies:
      "https://images.unsplash.com/photo-1587854680352-936b22b91030?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    petSupplies:
      "https://images.unsplash.com/photo-1488015795646-7e22a773d72a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schoolAndEducationalSupplies:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=2048&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shoes:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sportsEquipment:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    toysAndGames:
      "https://images.unsplash.com/photo-1663787591774-c1829054084c?auto=format&fit=crop&q=80&w=1941&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const categoryList = categoriesKeys.map((dataKey) => {
    return {
      name: t(`categories:${dataKey}`),
      dataKey,
      imageURL: categoryImages[dataKey],
    };
  });
  return categoryList;
}
