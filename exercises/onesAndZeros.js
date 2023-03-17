/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [1, 0, 0, 1] is treated as 1001 which is the binary representation of 9. */

const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([1, 0, 0, 1]));
