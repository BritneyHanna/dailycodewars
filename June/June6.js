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