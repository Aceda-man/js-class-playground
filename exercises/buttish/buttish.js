//1. Write an arrow function called `reverseString` that takes a string as input. It should return the string reversed.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("Antimonopologeographicationalism").toUpperCase());

//2. Write an arrow function called `isPrime` that takes a number
// as input. It should return `true` if the number is prime,
// and `false` otherwise.

const isPrime = (digit) => {
  for (let i = 2; i < digit; i++) {
    if (digit % i === 0) {
      return false;
    }
  }
  return digit > 1;
};

console.log(isPrime(73));

/**
 * 3. Write arrow functions called
 * `add`, `subtract`, `multiply`, and `divide`,
 * each taking two numbers as inputs.
 * Each should return the result of that operation.
 */

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const modulus = (x, y) => x % y;

console.log(add(24, 4));
console.log(subtract(24, 4));
console.log(multiply(24, 4));
console.log(divide(24, 4));
console.log(modulus(24, 4));

/**
 * 4. Write an arrow function called `celsiusToFahrenheit`
 * that takes a temperature in Celsius as input.
 * It should calculate and return the temperature in Fahrenheit
 * using the formula: (celsius * 9/5) + 32.
 */

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const celsius = 17;

console.log(celsiusToFahrenheit(celsius));

/**
 * 5. Write an arrow function called `isPalindrome`
 * that takes a string as input. It should return whether
 * the string reads the same forwards and backwards.
 */

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

if (isPalindrome("racecar")) {
  console.log("racecar is a palindrome!");
} else {
  console.log("racecar is not a palindrome.");
}

/**
 * 6. Write an arrow function called `countVowels`
 * that takes a string as input. It should return
 * the number of vowels (a, e, i, o, u) in the string.
 */

const countVowels = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("Antimonopologeographicationalism"));

/**
 * 7. Write an arrow function called `findLargest`
 * that takes an array of numbers as input.
 * It should return the largest number in the array.
 */

const numbers = [45, 15, 55, 100, 10, 249, 89];
const findLargest = (numbers) => {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
};

console.log(findLargest(numbers));
