//Take an array and remove every second element from the array.
function removeEveryOther(array) {
  return array.filter((number, index) => !(index % 2));
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 1, 3, 5, 7, 9 ]
