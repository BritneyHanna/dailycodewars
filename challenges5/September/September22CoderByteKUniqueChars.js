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