// LBA: You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20 Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) => arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);

console.log(positiveSum([1, 2, 3, -5]));

