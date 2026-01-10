/*mutation should return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array, and false otherwise. */

function mutation(array) {
  for (const letter of array[1].toLowerCase()) {
    if (!array[0].toLowerCase().includes(letter)) {
      return false;
    }
  }
  return true;
}
