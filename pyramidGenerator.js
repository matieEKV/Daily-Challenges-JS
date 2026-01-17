//build a pyramid generator by making a pyramid having set number of rows, repeating given char and upward or downward style depending on boolean

function pyramid(char, rows, isVertical) {
  let spaces = 0;
  let numberOfPrints;
  let result = "\n";
  if (!isVertical) {
    spaces = rows - 1;
    numberOfPrints = 1;
    while (spaces >= 0) {
      result += " ".repeat(spaces) + char.repeat(numberOfPrints) + "\n";
      spaces--;
      numberOfPrints += 2;
    }
  } else {
    numberOfPrints = rows * 2 - 1;
    while (spaces < rows) {
      result += " ".repeat(spaces) + char.repeat(numberOfPrints) + "\n";
      spaces++;
      numberOfPrints -= 2;
    }
  }
  return result;
}

console.log(pyramid("o", 5, false));
console.log(pyramid("o", 5, true));
