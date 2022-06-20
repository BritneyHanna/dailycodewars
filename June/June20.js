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
