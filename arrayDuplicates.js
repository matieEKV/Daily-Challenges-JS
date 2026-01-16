//determine if given array has duplicates, if yes return a new array with single instances of duplicates
function findDuplicates(arr) {
  const duplicates = [];
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] === sorted[j]) {
        duplicates.push(sorted[i]);
      }
    }
  }
  const unique = [...new Set(duplicates)];
  return unique;
}
