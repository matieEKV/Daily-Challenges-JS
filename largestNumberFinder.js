//build a function that returns an array consisting of the largest number from each provided sub-array.
function largestOfAll(array) {
  let largest = array[0][0];
  const arrayOfLargest = [];

  for (const item of array) {
    for (const number of item) {
      if (number > largest) {
        largest = number;
      }
    }
    arrayOfLargest.push(largest);
    let indexOfItem = array.indexOf(item);
    if (indexOfItem < array.length - 1) {
      indexOfItem += 1;
      largest = array[indexOfItem][0];
    }
  }
  return arrayOfLargest;
}
