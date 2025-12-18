// Given a string, return its camel case version
const string =
  "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk";

function camelCase(string) {
  const array = string.toLowerCase().split(/[ _-]+/);
  let camelCaseString = array[0];

  for (let i = 1; i < array.length; i++) {
    const word = array[i].split("");
    word.shift();
    word.unshift(array[i][0].toUpperCase());
    console.log(word);
    camelCaseString += word.join("");
  }
}

camelCase(string);
