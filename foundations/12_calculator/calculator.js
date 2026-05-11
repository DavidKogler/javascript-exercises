const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	return numArr.reduce((initialVal, currVal) => initialVal + currVal, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((product, currVal) => product * currVal);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let fact = 1;
  for (i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
