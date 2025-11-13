/* Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value.
 Return an array with the indices in ascending order of those two numbers, or "Target not found" if no two numbers sum up to the target.*/

findTarget([2, 7, 5, 3], 5);

function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i] === target) {
        return [i, j];
      }
    }
  }
  return "Target not found";
}
