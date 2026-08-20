const isPrime = (num) => {
  for (let i = 59; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

console.log(isPrime(7));