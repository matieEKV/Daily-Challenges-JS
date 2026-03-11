//Given a string of words, return a new string where each word is replaced by its length.

function convertWords(str) {
  return str
    .split(" ")
    .map((word) => word.length)
    .join(" ");
}

console.log(convertWords("hello world"));
