/*Given an integer between 1 and 10,000, 
return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.*/

squaresWithThree(1000);

function squaresWithThree(n) {
  let count = 0;
  const pattern = /3/;
  for (let i = 0; i < n; i++) {
    let squared = i * i;
    squared = squared.toString();
    if (squared.match(pattern) == 3) {
      count++;
    }
  }
  return count;
}
