//debug function with a switch case
//I just added return statements I could also have used a break

function getPlanetName(id) {
  let name;
  switch (id) {
    case 1:
      return (name = "Mercury");
    case 2:
      return (name = "Venus");
    case 3:
      return (name = "Earth");
    case 4:
      return (name = "Mars");
    case 5:
      return (name = "Jupiter");
    case 6:
      return (name = "Saturn");
    case 7:
      return (name = "Uranus");
    case 8:
      return (name = "Neptune");
  }

  return name;
}

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    //compare the first num the array to the value of the first+second numbers assign current sum to larger value
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    //compare the current value to the max value reassign to the larger value
    maxSum = Math.max(currentSum, maxSum);
  }
  // solution asked for the total not the sub array itself
  return maxSum;
};

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, targetNum) => {
  let map = new Map();
  result = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result.push(i, map.get(nums[i]));
    } else {
      map.set(targetNum - nums[i], i);
    }
  }
  return result;
};
