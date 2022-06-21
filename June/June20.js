//Write a function that removes every lone 9 that is inbetween 7s.  Need to review

function sevenAte9(str) {
  return str
    .split("")
    .filter(function (elem, index, arr) {
      //using == to equate value
      return (
        elem != 9 || !(elem == 9 && arr[index - 1] == 7 && arr[index + 1] == 7)
      );
    })
    .join("");
}
//************************************************************************** */
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
const min = function (list) {
  return list.sort((a, b) => a - b)[0];
};

const max = function (list) {
  return list.sort((a, b) => a - b)[list.length - 1];
};
