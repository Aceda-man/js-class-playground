// Write an arrow function called `reverseString` that takes a string as input. It should return the string reversed.
const reversedString = (name) => {
  return name.split("").reverse().join("");
};
console.log(reversedString("chris"));
