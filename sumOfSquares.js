/*Given a positive integer up to 1,000, 
return the sum of all the integers squared from 1 up to the number.*/

sumOfSquares(10);

function sumOfSquares(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}
