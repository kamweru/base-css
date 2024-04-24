/**
 * Generates a random hexadecimal string of the specified length.
 * @param {number} n - The length of the string to generate.
 * @returns {string} - The generated hexadecimal string.
 */
export let uuid = (n = 20) => {
  // Define the possible characters to use
  const DIGITS = "0123456789";
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ALPHABET_LOWERCASE = ALPHABET.toLocaleLowerCase();
  const ALPHANUMERIC = ALPHABET + ALPHABET_LOWERCASE + DIGITS;
  // Initialize an empty string to store the output
  let output = "";
  // Loop n times
  while (n--) {
    // Pick a random index from 0 to IDX - 1
    let index = Math.floor(Math.random() * ALPHANUMERIC.length);
    // Append the character at that index to the output
    output += ALPHANUMERIC[index];
  }
  // Return the output
  return output;
};

export const capitalizeFirstLetter = (string) =>
  `${string[0].toUpperCase()}${string.slice(1)}`;
export const typeAction = (node, type) => {
  node.type = type;
};

export const formatDate = (timestamp) => {
  // Create a new Date object from the timestamp
  let date = new Date(timestamp);
  // Get the day of the month
  let day = date.getDate();
  // Get the month name from an array of names
  let monthNames = [
    "January",
    "February",
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
  let month = monthNames[date.getMonth()];
  // Get the year
  let year = date.getFullYear();
  // Add the ordinal suffix to the day
  let suffix = "";
  if (day % 10 == 1 && day != 11) {
    suffix = "st";
  } else if (day % 10 == 2 && day != 12) {
    suffix = "nd";
  } else if (day % 10 == 3 && day != 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  // Return the formatted date
  return day + suffix + " " + month.substring(0, 3) + " " + year;
};
