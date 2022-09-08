//given an array find the first recurring number

const lookup = (arr) => {
  let seen = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen.includes(arr[i])) {
      return arr[i];
    } else {
      seen.push(arr[i]);
      console.log(seen);
    }
  }
  return undefined;
};

const findDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    //ste the value of j to one right of the value of i hence I used i+1
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

//I think this is quadratic time (need to verify) since the .includes array method search is o(n) and the for loop is also o(n). Same as if I used a nested for loop

//Better solution O(n) 

const findDuplicates = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++){
    //this is saying if the map obj has a key with the same value as the value at the index of the array 
    if (map[arr[i]] !==undefined) {
      return arr[i]
    } else {
      //if not make a property which goes by that name in this case I assigned the property a value of true 
      map[arr[i] ]=true
    }
  }
  return undefined
}

// the time complexity is linear because search in maps is 0(1) and the for loop is O(N)

// this is an edge case where this function would fail [2,5,5,2,1] it would return 5 instead of 2--need to figure this out 
 
