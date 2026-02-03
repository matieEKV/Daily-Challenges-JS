// build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

function sumPrimes(num) {
  const array = [];
  let prime;
  for (let i = num; i >= 0; i--) {
    prime = isPrime(i);
    if (prime == true) {
      array.push(i);
    }
  }
  return array.reduce((total, item) => total + item, 0);
}

function isPrime(num) {
  if (num < 2) return false;
  let isPrime = true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
console.log(sumPrimes(10)); // 17
