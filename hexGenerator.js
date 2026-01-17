//given a valid primary color, return a random hex color dominant in the given color
function generateHex(color) {
  const validColors = ["red", "green", "blue"];
  if (!validColors.includes(color)) {
    return "Invalid color";
  }
  const randomNumber = Math.floor(Math.random() * 99).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  if (color === "green") {
    return randomNumber + "FF" + randomNumber;
  } else if (color === "red") {
    return "FF" + randomNumber + randomNumber;
  }
  return randomNumber + randomNumber + "FF";
}
