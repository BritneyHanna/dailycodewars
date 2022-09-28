// KUniqueCharacters(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.
//need to review this solution from coderbyte 
const KUniqueCharacters = (str) => {
  let k = +str[0];
  str = str.slice(1);

  const uniqueChars = (s) => {
    let uniques = new Set([]);
    for (let c of s) {
      uniques.add(c);
    }
    return uniques.size;
  };

  const getAllSubstrings = (s) => {
    let i,
      j,
      result = [];

    for (i = 0; i < s.length; i++) {
      for (j = i + 1; j < s.length + 1; j++) {
        result.push(s.slice(i, j));
      }
    }
    return result;
  };

  let arr = getAllSubstrings(str);
  let out = [];
  let len = 0;

  arr.forEach((s) => {
    if (uniqueChars(s) === k) {
      out.push(s);
      if (s.length > len) {
        len = s.length;
      }
    }
  });

  let finalOutput = [];

  out.forEach((s) => {
    if (s.length === len) {
      finalOutput.push(s);
    }
  });

  return finalOutput[0];
};
//Alternative method 
function KUniqueCharacters(str) {
  var k = +str[0],
    longest = "";
  for (let i = 1; i < str.length; i++) {
    let currChars = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (currChars.includes(str[j]) && j != str.length - 1) continue;
      else if (currChars.length < k) currChars += str[j];
      else {
        var currStr = currChars.includes(str[j])
          ? str.slice(i)
          : str.slice(i, j);
        if (currStr.length > longest.length) longest = currStr;
        break;
      }
    }
  }
  return longest;
}
KUniqueCharacters(readline());


//Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
// Example


// The alphabet is rotated by , matching the mapping above. The encrypted string is .

// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

// Function Description

// Complete the caesarCipher function in the editor below.

// caesarCipher has the following parameter(s):

// string s: cleartext
// int k: the alphabet rotation factor
// Returns

// string: the encrypted string

//function caesarCipher(s, k) {
    // create the alpha array
//     let alpha = 'abcdefghijklmnopqrstuvwxyz';
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            
//     let cipheredString  = '';
//     let indexAlpha = 0;
//     let indexUpper = 0;
//     // k might be more than 26 so we need to find the modulus to see how many to rotate
//     let kPlaces = k%26;
//     // loop through each character of the string and convert it
//     for(let i=0; i<s.length; i++){
        
//
//need to review

//if (alpha.indexOf(s[i]) >= 0) {
        
//             // find this string in alpha
//             indexAlpha = alpha.indexOf(s[i]);
//             if (indexAlpha < alpha.length - kPlaces){
//                 cipheredString += alpha[indexAlpha+kPlaces];
//             } else {
//                 cipheredString += alpha[indexAlpha - alpha.length + kPlaces];
//             }
//         } else {
//             // check if this is an uppercase version
//             indexUpper = upper.indexOf(s[i]);
//             if(indexUpper >= 0){
//                 if (indexUpper < alpha.length - kPlaces){
//                     cipheredString += upper[indexUpper+kPlaces];
//                 } else {
//                     cipheredString += upper[indexUpper - alpha.length + kPlaces];
//                 }
//             } else {
//                 // this is not a alpha character, just print as is
//                 cipheredString += s[i];
//             }
//         }
//     }
    
//     return cipheredString;
// }

//Write a function to check if a string is an anagram
//assuming both strings are lowercase

const checkAnagram = (str1,str2) => {
    let sorted1 = str1.split('').sort().join('')
    let sorted2 = str2.split('').sort().join('');
    return sorted1===sorted2
}

