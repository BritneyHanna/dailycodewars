// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Best practice solution
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}


// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

function billboard(name, price = 30) {
  name = name.split("");
  return name.reduce((a, c) => {
    return a + price;
  }, 0);
} 

//Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
//Note that the number will always be non-negative (>= 0).
//****** Need to review  */


function insertDash(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + "-";

      return acc + c;
    }, "");
}

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//eg.* "String"      -> "SSttrriinngg"
function doubleChar(str) {
  let repeated;
  return (repeated = str
    .split("")
    .map((el) => `${el}${el}`)
    .join(""));
}

//Best practice solution
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
