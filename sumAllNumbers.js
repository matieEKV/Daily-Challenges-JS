//design a sum all numbers algorithm where a function is given an array with two numbers, and it has to return a sum of all numbers between

function sumAll(numbers) {
  let sorted = numbers.sort((a, b) => a - b);

  let number = sorted[1];
  let total = 0;
  while (number > sorted[0]) {
    number -= 1;
    if (number != sorted[0]) {
      sorted.push(number);
    }
  }
  for (const number of sorted) {
    total += number;
  }
  return total;
}

console.log(sumAll([10, 5]));
