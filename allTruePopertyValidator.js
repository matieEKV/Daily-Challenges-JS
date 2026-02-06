//test a specific property of each object in an array to see if it always has a truthy value or not.

function truthCheck(collection, pre) {
  // let result = collection.filter(prop => !prop[pre])
  // return result.length === 0;

  return collection.every((obj) => obj[pre]); //refactored using .every
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot",
  ),
); // false
