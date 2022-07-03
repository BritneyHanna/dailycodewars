// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
//example: [45, 120] --> [3, 8]
//this answer was copied from codewars
function reduce(fraction) {
    let result = [];
    // started from the highest common  factor immediately 
  for (let i = fraction[0]; i > 0; i--) {
    if (fraction[0] % i == 0 && fraction[1] % i == 0) {
      result.push(fraction[0] / i);
      result.push(fraction[1] / i);
      return result;
    }
  }
}

