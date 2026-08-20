// Write an arrow function called `reverseString` that takes a string as input. It should return the string reversed.
const reversedString = (name) => {
  return name.split("").reverse().join("");
};
console.log(reversedString("chris"));

//  Write an arrow function called `isPrime` that takes a number as input. It should return `true` if the number is prime, and `false` otherwise.
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(25));
