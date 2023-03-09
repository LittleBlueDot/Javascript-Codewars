// Complete the square sum function so that it squares each number passed into it and then sums the results toget

const squareSum = (numbers) => numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
