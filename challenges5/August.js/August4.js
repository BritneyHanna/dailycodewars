//Task
// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

// You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

// Return the five after works finished.

// You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
//Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case Number(n):
      return "Input number is " + n;
    default:
      return "Input number is Number.NaN";
  }
}