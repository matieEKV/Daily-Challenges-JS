//Make a function that places a hyphen when characters change from numbers to letters

function separateLettersAndNumbers(str) {
  let hyphened = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (isNaN(str[i]) === isNaN(str[j])) {
        hyphened += str[i];
        break;
      } else if (!str[j]) {
        hyphened += str[i];
      } else {
        hyphened += str[i] + "-";
        break;
      }
    }
  }
  return hyphened;
}

console.log(separateLettersAndNumbers("ABC123"));
