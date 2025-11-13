// Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

spaceJam("i am me & you");

function spaceJam(s) {
  const sUpper = s.toUpperCase();
  const noSpace = sUpper.replace(/ /g, ""); //replacing the space with no-space using regular expression
  const lastChar = noSpace[noSpace.length - 1];
  let spacedString = "";
  for (let i = 0; i < noSpace.length - 1; i++) {
    const spaces = "  ";
    spacedString += noSpace.slice(i, i + 1) + spaces;
  }
  const finalString = spacedString + lastChar;
  return finalString;
}
