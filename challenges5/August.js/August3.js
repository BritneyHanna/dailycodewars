// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
const nbDig = (n, d) => {
  let result = "";
  for (let i = 0; i <= n; i++) {
    result += i ** 2;
  }
  return result.split("").filter((el) => el == d).length;
};
//******************************************************************* */

function getTheVowels(word, vowels = 'aeiou') {
    let count = 0;
    let indexOfVowels = 0
    for (let i = 0; i < word.length; i++) {
        if (word[index]) {
            

        }
 
    }
}
 

//************************************************************** */

//You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

// This is better explained with a couple of examples:

// You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
// This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
// Note
// For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.


function getTheVowels(word, vowels = "aeiou") {
  let count = 0;
  let indexOfVowels = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === vowels[indexOfVowels]) {
      count++;
      indexOfVowels++;
    }

    if (indexOfVowels === 5) {
      indexOfVowels = 0;
    }
  }
  return count;
}
//*********************************************************************** */

