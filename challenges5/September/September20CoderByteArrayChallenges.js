//Find Intersection
//Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
//separate the strings into 2 values that are arrays split by comma and space to remove those
//make a map
//make a result variable
// for every element in first string assuming there are no dupes add as a key in the map
//for every element in second string check the map to see if its there as a key . If its there as a key then push it to the results array
//return the results array as a string separated by commas otherwise return the string false



function FindIntersection(strArr) {
  let first = strArr[0].split(", ");
  let second = strArr[1].split(", ");
  let map = {};
  let result = [];
  for (let i = 0; i < first.length; i++) {
    map[first[i]] = true;
  }
  for (let i = 0; i < second.length; i++) {
    if (map[second[i]]) {
      result.push(second[i]);
    }
  }
  if (result.length > 0) {
    return result.join(",");
  }
  return "false";
}

//Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// my mistake when I first tried this was assuming the seq would be consistent for the entire array
//instead I'll check every element in the array. Ill push the diff/ quotient to a set
//since a set cant hold dupes if the pattern is the same then the set size will be one for whichever pattern is correct 



function ArithGeo(arr) {
  let arith = new Set();
  let geo = new Set();
  for (let i = 1; i < arr.length; i++) {
    arith.add(arr[i] - arr[i - 1]);
    geo.add(arr[i] / arr[i - 1]);
  }
  if (arith.size === 1) {
    return "Arithmetic";
  } else if (geo.size === 1) {
    return "Geometric";
  }
  return -1;
}


//**************************************************************************** */
//couldnt figure out this one
//Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.

function Consecutive(arr) {
  return Math.abs(Math.max(...arr) - Math.min(...arr)) - arr.length + 1;
}


//********************************************************************* */
//Other Products
// Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers.
function OtherProducts(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result.join("-");
}
//Remove Brackets
//Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.
function RemoveBrackets(str) {
  while (str.includes("()")) {
    str = str.replace("()", "");
  }
  return str.length;
}