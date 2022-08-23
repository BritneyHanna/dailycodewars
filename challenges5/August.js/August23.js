// Write a function capitalize() which capitalizes the first letter (if any) of the given string.JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
String.prototype.capitalize = function () {
    let char = this.charCodeAt(0);
    //lowercase letters are between 97 and 122
    if (char > 96 && char < 123) {
      //uppercase letter is 32 less than the lowercase version
    char -= 32;
    }
    //combine the now capitliazed first letter with the rest of the String 
  return String.fromCharCode(char) + this.slice(1);
};