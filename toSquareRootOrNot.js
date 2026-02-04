//return a square root of a number if it is an integer, otherwise return its square

function squareOrSquareRoot(array) {
  const mapped = array.map((number) =>
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number,
  );
  return mapped;
}

console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6])); // [ 1, 4, 9, 2, 25, 36 ]
