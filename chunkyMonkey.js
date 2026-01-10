/*The function should split the array into smaller arrays of length 
equal to the second argument and return them as a two-dimensional array. */

function chunkArrayInGroups(array, number) {
  const length = array.length - number;
  let count = 0;
  const chunkyArray = [];
  while (count < length) {
    const array1 = array.splice(0, number);
    chunkyArray.push(array1);
    count += number;
  }
  chunkyArray.push(array);

  return chunkyArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
