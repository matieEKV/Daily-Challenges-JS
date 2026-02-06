// flatten and array into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays.
// Other types are left unchanged.

function steamrollArray(array) {
  const stack = [...array];
  const flattened = [];

  while (stack.length !== 0) {
    let popped = stack.pop();
    if (Array.isArray(popped)) {
      for (const item of popped) {
        stack.push(item);
      }
    } else {
      flattened.push(popped);
    }
  }
  return flattened.reverse();
}

console.log(steamrollArray([1, {}, [3, [[4]]]])); //[ 1, {}, 3, 4 ]
