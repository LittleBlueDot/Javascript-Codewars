// Given an array of integers as strings and numbers, return:

// 1. The sum of the array values as if all were numbers.

// 2. The sum of the array values that are the numbers.

// 1. 
const sumMix = (x) => x.reduce((sum, n) => (sum + Number(n)), 0);

console.log(sumMix([9, 3, '7', '3']));

// 2.

const sumMix1 = (x) => x.reduce((sum, n) => (typeof n == 'number' ? sum + n : sum), 0);

console.log(sumMix1([9, 3, '7', '3']));