import moment from "moment/moment";

export default function formatDate(dateObj) {
  const date = new Date(
    dateObj?.seconds * 1000 + dateObj?.nanoseconds / 1000000
  );
  return moment(date).format("DD MMMM YYYY");
}
