/*Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.*/

const text = "your life is adventure";

jbelmu(text);

function jbelmu(text) {
  const splitText = text.split(" ");
  let mumbleJumble = [];
  splitText.forEach((word) => {
    const lng = word.length - 1;
    const firstLetter = word[0];
    const lastLetter = word[lng];

    let sliced = word.slice(1, lng);
    sliced = sliced.split("").sort().join("");
    if (lng === 0) {
      word = firstLetter;
    } else {
      word = firstLetter + sliced + lastLetter;
    }
    mumbleJumble.push(word);
  });
  return mumbleJumble.join(" ");
}

/* steps taken: 
- split the sentence into separate items in an array
- for each item in array remove first and last letter
- sort the remaining string alphabetically 
- concatenate with first and last letter (if word is longer than one letter)
- add the word in another array
- join the words in string of words */
