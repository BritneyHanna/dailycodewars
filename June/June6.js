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
