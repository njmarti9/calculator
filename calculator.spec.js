const calculator = require('./calculator');

describe('addition', () => {
	test('adds 0 and 0', () => {
		expect(calculator.addition(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(calculator.addition(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(calculator.addition(2,6)).toBe(8);
	});
});

describe('subtraction', () => {
	test('subtracts 0 and 0', () => {
		expect(calculator.subtraction(0,0)).toBe(0);
	});

	test('subtracts 2 and 2', () => {
		expect(calculator.subtraction(2,2)).toBe(0);
	});

	test('subtracts positive numbers', () => {
		expect(calculator.subtraction(6,2)).toBe(4);
	});

    test('subtracts positive numbers', () => {
        expect(calculator.subtraction(2,6)).toBe(-4);
    });
});

describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(calculator.multiply(2,4)).toBe(8);
	});
});

describe('divide', () => {
	test('divides two numbers', () => {
		expect(calculator.divide(9,3)).toBe(3);
	});
});