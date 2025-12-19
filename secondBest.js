/*Given an array of integers representing the price of different laptops, and an integer representing your budget, return:
The second most expensive laptop if it is within your budget, or The most expensive laptop that is within your budget, or
0 if no laptops are within your budget. Duplicate prices should be ignored.*/

function secondBest(prices, budget) {
  const uniqueArray = [...new Set(prices)].sort();
  for (let i = uniqueArray.length - 1; i >= 0; i--) {
    if (uniqueArray[i - 1] <= budget) {
      return uniqueArray[i - 1];
    } else if (uniqueArray[i] <= budget) {
      return uniqueArray[i];
    } else {
      continue;
    }
  }
  return 0;
}
