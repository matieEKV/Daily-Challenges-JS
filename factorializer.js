/*Given an integer from zero to 20, return the factorial of that number. 
The factorial of a number is the product of all the numbers between 1 and the given number.*/

factorial(0);

function factorial(n) {
  let sum = 1;
  if (!n) {
    return 1;
  }
  for (let i = n; i > 0; i--) {
    sum *= i;
  }
  return sum;
}
