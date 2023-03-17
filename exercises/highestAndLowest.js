/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

function highAndLow(numbers) {
  const splitToArray = numbers.split(' ');
  const strToNumbers = splitToArray.map((num) => parseInt(num));
  return Math.max.apply(null, strToNumbers) + ' ' + Math.min.apply(null, strToNumbers)
}


console.log(highAndLow('1 2 3 4 5'));
