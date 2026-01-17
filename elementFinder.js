//given an array and a function, return the first element that passes the function test
function findElement(array, test) {
  for (const item of array) {
    if (test(item) == true) {
      return item;
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
