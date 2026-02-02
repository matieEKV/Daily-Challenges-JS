//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"])); // [ 'pen', 'pencil', 'notebook' ]
