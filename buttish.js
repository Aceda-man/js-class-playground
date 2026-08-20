//1. Write an arrow function called `reverseString` that takes a string as input. It should return the string reversed.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("Madam"));
