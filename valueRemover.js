//create a function that takes an initial array as its first argument,
// followed by one or more additional arguments representing the values to remove
//The function must accept an indeterminate number of arguments.

function destroyer(array, ...args) {
  return array.filter((item) => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [ 1, 5, 1 ]
