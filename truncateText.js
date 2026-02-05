// truncate string if longer than 20 characters and replace characters after 17th character with ...
function truncateText(text) {
  if (text.length > 20) {
    return text.slice(0, 17) + "...";
  }
  return text;
}

console.log(truncateText("This string should get truncated.")); // This string shoul...
