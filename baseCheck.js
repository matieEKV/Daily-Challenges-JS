//Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

let s = "Z";
isValidNumber(s, 6);

function isValidNumber(n, base) {
  const nUpper = n.toUpperCase();
  for (let i = 0; i < nUpper.length; i++) {
    if (nUpper[i] >= base) {
      return false;
    } else {
      const sHex = nUpper.charCodeAt(i) - 54;
      if (sHex > base) {
        return false;
      }
    }
  }
  return true;
}
