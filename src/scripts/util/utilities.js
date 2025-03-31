export function smartCapitalize(str) {
  // Capitalises every word of a sentence except for words like "of", "the", "and", etc.
  // Always capitalises the first word of a sentence.

  const exceptions = [
    "a",
    "an",
    "the",
    "of",
    "and",
    "but",
    "or",
    "nor",
    "for",
    "yet",
    "so",
    "at",
    "by",
    "for",
    "in",
    "on",
    "to",
    "with",
    "as",
    "into",
    "like",
    "near",
    "onto",
    "over",
    "past",
    "upon",
    "down",
    "from",
    "upon",
    "till",
    "than",
    "under",
    "until",
    "up",
  ];

  const words = str.split(" ");
  const capitalized = words.map((word, i) => {
    if (i === 0 || !exceptions.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return capitalized.join(" ");
}
