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
  const categoryList = categoriesKeys.map((stateKey) => {
    return { name: t(`categories:${stateKey}`), stateKey };
  });
  return categoryList;
}
