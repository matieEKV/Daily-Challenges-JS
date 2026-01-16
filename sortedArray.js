//given an array determine whether the numbers in it are ordered (descending or ascending) or not.
function isSorted(arr) {
  const copyAsc = [...arr].sort((a, b) => a - b);
  const copyDesc = [...arr].sort((a, b) => b - a);

  if (JSON.stringify(arr) === JSON.stringify(copyAsc)) {
    return "Ascending";
  } else {
    if (JSON.stringify(arr) === JSON.stringify(copyDesc)) {
      return "Descending";
    }
  }
  return "Not sorted";
}
