//Trailing 0s in a factorial


//Remove dupes from an array

function removedupes(array) {
    return[... new Set(array)]
}

//alternative method 
function removedupes(arr) {
  return arr.filter((element, index) => {
    //index of returns the first index at which its found so it will only match and return once
    return arr.indexOf(element) == index;
  });
}
console.log(removedupes(arr));


//is Palindrome

function isPalindrome(string) {
    //remember to turn the string to lowercase unless otherwise stated
    string = string.toLowerCase();
  let reversed = string.split("").reverse().join("");
  return string === reversed;
}

function isPalindrome(string) {
    string = string.toLowerCase();
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
    return string === reversed;
    

}


//trailing zeros of a factorial function findTrailingZeros(n) need to review 
{
 
    if(n < 0) //Negative Number Edge Case
      return -1;
     
    // Initialize result
    let count = 0;
 
    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}
