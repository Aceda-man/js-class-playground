// challenge no. 1
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
console.log(reverseString("courage"));

// challenge no. 2

    const isPrime = (num) => {
        try{
            if (typeof num !== 'number' || !Number.isInteger(num)) {
                throw new Error('Input must be an integer.');
            }

            if (num < 2) {
                return false;
            }
            else {
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i ===0) {
                        return false;
                    }
                }
                return true;
            }
        }
        catch (err) {
            console.error('Error:', err.message);
            return false;
        }
    }
    console.log(isPrime(7));
    console.log(isPrime(10));
    console.log(isPrime(7.5));
    console.log(isPrime("hello"));

    // challenge no. 3

    const add = (a, b) => {
        try {
            if (typeof a !== 'number' || typeof b !== 'number'){
                throw new Error('Both arrguments must be numbers.');
            }

            else {
                return a + b;
            }
        }
        catch (err) {
            console.error('Error:', err.message);
            return null;
        }
    }

    const substract = (x, y) => {
        try {
            if (typeof x !== 'number' || typeof y !== 'number'){
                throw new Error('Both arrguments must be numbers.');
            }

            else {
                return x - y;
            }
        }
        catch (err) {
            console.error('Error:', err.message);
            return NaN;
        }
    }

    const multiply = (c, d) => {
        try {
            if (typeof c !== 'number' || typeof d !== 'number'){
                throw new Error('Both inputs must be numbers.');
            }

            else{
                return c * d;
            }
        }
        catch (err) {
            console.error('Error:', err.message);
            return NaN;
        }
    }

    const divide = (z, y) => {
        try{
            if(typeof z !== 'number' || typeof y !== 'number'){
                throw new Error ('Both inputs must be numbers')
            }

            else{
                return z / y;
            }
        }

        catch (err){
            console.error('Error:', err.message);
            return NaN;
        }
    }

    console.log(add(15, 5), substract(25, 10), divide(49, 7), multiply(5, 5));
