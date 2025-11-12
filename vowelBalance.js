//Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

const s = "abcdefghijklmnopqrstuvwxyz";
const sLower = s.toLowerCase();
const lengthOfHalf = Math.floor(sLower.length / 2);
isBalanced(sLower);

function isBalanced(sLower) {
  let firstHalfVowelCount = 0;
  for (let i = 0; i < lengthOfHalf; i++) {
    if (
      sLower[i] === "a" ||
      sLower[i] === "e" ||
      sLower[i] === "i" ||
      sLower[i] === "o" ||
      sLower[i] === "u"
    ) {
      firstHalfVowelCount++;
    }
  }
  let secondHalfVowelCount = 0;

  if (s.length % 2 != 0) {
    for (let i = lengthOfHalf + 1; i <= s.length; i++) {
      if (
        sLower[i] === "a" ||
        sLower[i] === "e" ||
        sLower[i] === "i" ||
        sLower[i] === "o" ||
        sLower[i] === "u"
      ) {
        secondHalfVowelCount++;
      }
    }
  } else {
    for (let i = lengthOfHalf; i <= s.length; i++) {
      if (
        sLower[i] === "a" ||
        sLower[i] === "e" ||
        sLower[i] === "i" ||
        sLower[i] === "o" ||
        sLower[i] === "u"
      ) {
        secondHalfVowelCount++;
      }
    }
  }

  return firstHalfVowelCount != secondHalfVowelCount ? false : true;
}
