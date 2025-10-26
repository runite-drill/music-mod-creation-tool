export function smartCapitalize(str: string) {
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

export function cleanYamlKey(key: string) {
  // Cleans a YAML key string to make it safe and readable.
  key = key.trim();
  key = key.replace(/[^A-Za-z0-9_-]+/g, "");
  key = key.replace(/^[-_]+/, "");

  if (key === "") key = "MMCT_yaml_key_error";

  return key;
}
