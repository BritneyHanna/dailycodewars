//2Sum Problem Review

//Make an empty map
//loop through the list and for each element find the diff between target and num[i]
//check if that diff exists as a key in the map
//if it does then return the map[diff ] which gives the index of tht value as well as the index of the current element i
//if it doesnt then add the value of the number at the current index to the map 

const twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] != null) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

// function Palindrome(str) {
//   if (
//     str.toLowerCase().split(" ").join("") ===
//     str.toLowerCase().split(" ").join("").reverse()
//   ) {
//     return "true";
//   }
//   return "false";
// }