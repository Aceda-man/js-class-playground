1.// Write an arrow function called `reverseString` that takes a string as input. It should return the string reversed.
 const reverseString = (string) =>{
    return string= string.split("").reverse().join("");
    
 }
 console.log(reverseString("destiny"));

 //2. Write an arrow function called `isPrime` that takes a number as input. It should return `true` if the number is prime, and `false` otherwise.
const isprime = (num) => {
    if (num <=1){
        return "false it isn't a prime number";}
        for(let x = 2; x <= Math.sqrt(num); x++){
            if(num % x === 0) {
                return "false it isn't a prime number"
            }
        }
        return "true is it a prime number"
    
}
console.log(isprime(16));
console.log(isprime(29));

//3. Write arrow functions called `add`, `subtract`, `multiply`, and `divide`, each taking two numbers as inputs. Each should return the result of that operation
const calculation = (x,y,operation) => {
    if (operation === "add")
        return x + y
    if (operation === "subtract")
        return x - y
    if (operation === "multiply")
        return x * y
    if (operation === "divide")
        return x/y
    
}
 console.log(calculation( 10,5, "add"));
 console.log(calculation(20,4, "subtract"));
 console.log(calculation(4,4, "multiply"));
 console.log(calculation(36,6, "divide"));

//4. Write an arrow function called `celsiusToFahrenheit` that takes a temperature in Celsius as input It should calculate and return the temperature in Fahrenheit using the formula: (celsius * 9/5) + 32.
const celsiusToFahrenheit = (tempInCelsuis) => {
    return tempInCelsuis = (tempInCelsuis * 9/5) + 32 +"fahrenheit"
}
console.log(celsiusToFahrenheit(35));


//5. Write an arrow function called `isPalindrome` that takes a string as input. It should return whether the string reads the same forwards and backwards.
const isPalindrome = (word) => {
    return word === word.split("").reverse().join("")? "yes it is a palindrome" : "no it is not a palindrome"
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("chidi"));



