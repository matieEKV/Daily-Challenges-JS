//create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

function whatIsInAName(arr, obj) {
  return arr.filter((item) =>
    Object.keys(obj).every((k) => obj[k] === item[k]),
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
); // [ { first: 'Tybalt', last: 'Capulet' } ]
