//Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

let startSequence = [1, 2];

fibonacciSequence(startSequence, 1);

function fibonacciSequence(startSequence, length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    startSequence.pop();
    return startSequence;
  } else {
    for (let i = 0; i < length - 2; i++) {
      const sum = startSequence[i] + startSequence[i + 1];
      startSequence.push(sum);
    }
    return startSequence;
  }
}
