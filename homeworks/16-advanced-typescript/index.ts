interface Result {
    result: null | number;
    error: string;
}

interface Calculator {
    add(num1: number, num2: number): Result;
    subtract(num1: number, num2: number): Result;
    multiply(num1: number, num2: number): Result;
    divide(num1: number, num2: number): Result;
    power(base: number, exponent: number): Result;
    sqrt(num: number): Result;
}

class BaseCalculator implements Calculator {
    add(num1: number, num2: number): Result {
        return { result: num1 + num2, error: '' };
    }

    subtract(num1: number, num2: number): Result {
        return { result: num1 - num2, error: '' };
    }

    multiply(num1: number, num2: number): Result {
        return { result: num1 * num2, error: '' };
    }

    divide(num1: number, num2: number): Result {
        if (num2 === 0) {
            return { result: null, error: 'Cannot divide by 0' };
        }
        return { result: num1 / num2, error: '' };
    }

    power(base: number, exponent: number): Result {
        if (!Number.isInteger(exponent) || exponent < 0) {
            return { result: null, error: 'Exponent must be a positive integer' };
        }
        return { result: Math.pow(base, exponent), error: '' };
    }

    sqrt(num: number): Result {
        if (num < 0) {
            return { result: null, error: 'Cannot calculate square root of negative number' };
        }
        return { result: Math.sqrt(num), error: '' };
    }
}

const calculator = new BaseCalculator();

console.log(calculator.add(2, 3)); // { result: 5, error: '' }
console.log(calculator.subtract(5, 3)); // { result: 2, error: '' }
console.log(calculator.multiply(2, 3)); // { result: 6, error: '' }
console.log(calculator.divide(6, 3)); // { result: 2, error: '' }
console.log(calculator.divide(6, 0)); // { result: null, error: 'Cannot divide by 0' }
console.log(calculator.power(2, 3)); // { result: 8, error: '' }
console.log(calculator.power(2, -1)); // { result: null, error: 'Exponent must be a positive integer' }
console.log(calculator.sqrt(4)); // { result: 2, error: '' }
console.log(calculator.sqrt(-4)); // { result: null, error: 'Cannot calculate square root of negative number' }
