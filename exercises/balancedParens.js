function balancedParens(string) {
  return !string.split('').reduce(function (previous, current) {
    if (previous > 0) {
        return previous;
    }
    if (current === '(') {
      return ++previous;
    }
    if (current === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}



console.log(balancedParens('((()))'));
console.log(balancedParens('))()))'));
console.log(balancedParens(')('));
