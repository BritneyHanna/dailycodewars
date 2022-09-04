//Reverse a string

const reverse = (str) => {
  //check input don't assume we will always receive a string 
  if(!str||str.length<2|| typeof str!=='string'){
    return `the input parameter is invalid for this function`
  }
  //create an empty array
 let reversed = [];
  //for each index of the string starting at the last index length-1 push onto the array
  for (let i = str.length - 1; i >= 0; i--) {
   reversed.push(str[i]);
  }
  //convert the array to a string and return it 
  return reversed.join("");
  
  
}

//Merge 2 sorted arrays 
const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};





