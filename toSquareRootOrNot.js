//return a square root of a number if it is an integer, otherwise return its square

function squareOrSquareRoot(array) {
  return array.map((number) => {
    const root = Math.sqrt(number);
    return Number.isInteger(root) ? root : number ** 2;
  });
}

console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6])); // [ 1, 4, 9, 2, 25, 36 ]
