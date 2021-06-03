const MONTHS = [
  "January",
  "Febrauary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDate(dateString, variation) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  switch (variation) {
    case 1:
      return `${MONTHS[month]} ${day}, ${year}`;
    case 2:
      return `${MONTHS[month]} ${day}`;
    case 3: {
      if (hours > 12) {
        return `${MONTHS[month]} ${day}, ${year} @ ${hours - 12}:${minutes}pm`;
      }
      if (hours == 0) {
        return `${MONTHS[month]} ${day}, ${year} @ 12:${minutes}am`;
      }
      return `${MONTHS[month]} ${day}, ${year} @ ${hours}:${minutes}am`;
    }
    default:
      return `${MONTHS[month]} ${day}`;
  }
}
