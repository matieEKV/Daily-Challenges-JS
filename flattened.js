//Given an array, determine if it is flat(no elements are arrays)g

function isFlat(arr) {
  return !arr.some((element) => Array.isArray(element));
  //return arr.every(element => !Array.isArray(element))
}
