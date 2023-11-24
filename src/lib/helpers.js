import moment from "moment/moment";

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

export function formatDate(dateObj, format = "DD MMMM YYYY") {
  const date = new Date(
    dateObj?.seconds * 1000 + dateObj?.nanoseconds / 1000000
  );
  return moment(date).format(format);
}
