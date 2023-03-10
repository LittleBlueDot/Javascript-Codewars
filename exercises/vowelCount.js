/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  if (str.match(/[aeiou]/gi)) {
    return str.match(/[aeiou]/gi).length;
  } else {
    return 0;
  }
}

console.log(getCount("my pyx"));
console.log(getCount("lina"));
