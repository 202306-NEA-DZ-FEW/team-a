export const getLocationName = (translatedLocation) => {
  const locationName = translatedLocation
    .replace(/^[\d٠١٢٣٤٥٦٧٨٩-]+/, "")
    .trim();

  return locationName;
};

export const truncateString = (inputString, maxLength) => {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength) + "...";
  }
  return inputString;
};
