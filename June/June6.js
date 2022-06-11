// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

//So given a string "super", we should return a list of [2, 4]. Index 1 based not zero

function vowelIndices(word) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let vowelindex = [];
  word
    .toLowerCase()
    .split("")
    .forEach((el, index) => {
      if (vowels.includes(el)) {
        vowelindex.push(index + 1);
      }
    });

  return vowelindex;
}

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

function last(x) {
  x = x.split(" ");

  x.sort((a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) {
      return -1;
    } else if (a[a.length - 1] > b[a.length - 1]) {
      return 1;
    } else {
      return 0;
    }
  });
  return x;
}

// More concise syntax 

function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
//remove("Hi Hi! Hi!") === "Hi"
function remove(string) {
  //split string
    string = string.split(" ");
    
    let newstr = [];


    for (let i = 0; i < string.length; i++) {
      // every time the outer loop runs the count is reset to 0 for each word
        let count = 0;
        //for every word in the loop the count is incremented by 1 if the word indexis !
    for (let j = 0; j < string[i].length; j++) {
      if (string[i][j] === "!") {
        count++;
      }
        }
        //back to the outer loop if the count is not 1 then we push that word to the new array that will hold the new str
    if (count !== 1) {
      newstr.push(string[i]);
    }
    }
    // once everything is pushed we use the join method to convert that array back to a string 
  return newstr.join(" ");
}

//Other solution need to review 
function remove2(s) {
  return s
    .split(" ")
    .filter((i) => i.split("!").length != 2)
    .join(" ");
}

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
//Now you have to write a function that takes an argument and returns the square of it.
let square = (num) => num ** 2;