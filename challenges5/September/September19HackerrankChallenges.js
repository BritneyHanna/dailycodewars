//Given an array of integers, where all elements but one occur twice,

//find the unique element.

//Method 1 find the element where the first index it appears is also the last index 
 function lonelyinteger1(a) {
return a.filter((element)=>a.indexOf(element)===a.lastIndexOf(element))
   
   
}
 

//method 2

//make an empty hashmap check if the value at index i of the array exists as a key on the hashmap if not then add it set its value to 1
// if it does already exist increment the value so we can track how often it appears
//use Object.keys to get an array of all the keys filter this array for values at the key that equal 1 


function lonelyinteger(a) {
  let map = {};
  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) {
      map[a[i]] = 1;
    } else {
      map[a[i]] += 1;
    }
  }
  return Object.keys(map).filter((key) => map[key] === 1);
}


//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// 1 2 3
// 4 5 6
// 9 8 9
//this is a 2 dimensional array 


function diagonalDifference(arr) {
  let l = arr.length;
  let lSum = 0;
  let rSum = 0;

  for (let i = 0, j = l - 1; i < l; i++, j--) {
    lSum += arr[i][i];
    rSum += arr[i][j];
  }
  return Math.abs(lSum - rSum);
}




//write a function that checks if a number is a power of 2 
function PowersofTwo(num) {
  if (num === 1) {
    return true;
  } else {
    let i = 1;
    while (i < num) {
      i *= 2;
    }
    return i === num;
  }
 
}
//******************************************************************************* */

//write a function that returns the longest word in a sentence--- sentence might have words or special characters

function LongestWord(sen) {
  sen = sen.match(/\w+/g);
  return sen.sort((a, b) => b.length - a.length)[0];
}

