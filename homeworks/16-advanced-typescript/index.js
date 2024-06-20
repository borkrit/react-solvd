"use strict";
class BaseCalculator {
    add(num1, num2) {
        return { result: num1 + num2, error: '' };
    }
    divide(num1, num2) {
        if (num2 === 0)
            return { result: null, error: 'Cannot divide by 0' };
        return { result: num1 / num2, error: '' };
    }
    multiply(num1, num2) {
        return { result: num1 * num2, error: '' };
    }
    power(base, exponent) {
        if (!Number.isInteger(exponent) || exponent < 0)
            return { result: null, error: 'Exponent must be a positive integer' };
        return { result: Math.pow(base, exponent), error: '' };
    }
    sqrt(num) {
        if (num < 0)
            return { result: null, error: 'Cannot calculate square root of negative number' };
        return { result: Math.sqrt(num), error: '' };
    }
    subtract(num1, num2) {
        return { result: num1 - num2, error: '' };
    }
}
const calculator = new BaseCalculator();
console.log(calculator.add(2, 3));
