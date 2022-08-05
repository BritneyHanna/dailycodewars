// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
//question is asking you to make all the strings the same length as the shortest one

const cutIt = (arr) =>
  arr.map((el) => el.slice(0, Math.min(...arr.map((el) => el.length))));
