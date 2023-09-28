// Numbers can be written decimal or without decimal in JavaScript

let x = 123; // without decimal
let y = 1.34; // with decimal

// Number with 15 digits will be readalbe in javascript
let readalbeNum = 999999999999999;
let notReadalbeNum = 99999999999999999; // result for this 100000000000000000


// console.log(notReadalbeNum);

// Floating point arithmatic is not always accurate
let p = .1;
let q = .2;
// console.log(p + q); // result is 0.30000000000000004

// console.log(x);

// Exponent Numbers
let m = 123e5;
let n = 123e-5;

// console.log(n);

// Integer and floating Numbers
let myIntNum = 321;
let myFloatNum = 0.321;

// String in Numbers
let num1 = 5;
let num2 = 10;
// console.log('The result is ',  num1 + num2); // The result is  15

let num3 = '5';
let num4 = 10;
// console.log('The result is ',  num3 + num4); // The result is  510 adding num and string the result will be string

// useful methods for Numbers in javascript

let lotOfDecimal = 3.3333333333;
console.log(lotOfDecimal.toFixed(2)); // 3.33


