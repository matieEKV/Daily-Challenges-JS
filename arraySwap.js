//Given an array with two values, return an array with the values swapped.

function arraySwap(arr) {
  const switched = [];

  for (const item of arr) {
    switched.unshift(item);
  }
  return switched;
}
