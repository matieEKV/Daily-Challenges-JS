//Given a string, return a new string where all vowels are converted to
// uppercase and all other alphabetical characters are converted to lowercase.

function vowelCase(str) {
  const vowels = "aeiou";
  let mutated = "";

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      mutated += char.toUpperCase();
    } else {
      mutated += char.toLowerCase();
    }
  }
  return mutated;
}

console.log(vowelCase("HELLO, world!"));
