//Create an algorithm that merges two arrays together. Array1 into Array2 at index provided. Do not mutate original arrays

function frankenSplice(array1, array2, index) {
  let copied = [...array2];
  let combined = copied.splice(index, 0, ...array1);
  return copied;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));
