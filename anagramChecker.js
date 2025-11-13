// Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

const str1 = "School master";
const str2 = "The classroom";

areAnagrams(str1, str2);

function areAnagrams(str1, str2) {
  const str1NoSpace = str1.replace(/ /g, "");
  str1 = str1NoSpace.toLowerCase().split("").sort().join("");

  const str2NoSpace = str2.replace(/ /g, "");
  str2 = str2NoSpace.toLowerCase().split("").sort().join("");

  if (str1 === str2) {
    return true;
  }
  return false;
}
