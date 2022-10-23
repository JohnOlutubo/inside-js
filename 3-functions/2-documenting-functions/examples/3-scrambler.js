// #todo

'use strict';

console.log('-- begin --');

/* *
 * This returns a single string containing it's parameters,
 * but rearranged into a different order.
 *
 * @param {string} [param1=''] - Becomes the last string in the result.
 * @param {string} [param2=''] - Becomes the first string in the result.
 * @param {string} [param3=''] - Becomes the second string in the result.
 * @returns {string} A string with p1 -> r3, p2 -> r1, p3 -> r2.
 */

const scramble = (param1 = '', param2 = '', param3 = '') => {
  const result = param2 + param3 + param1;
  return result;
};

const _1_expected = 'zyx';
const _1_actual = scramble('x', 'z', 'y');
const _1_test = _1_actual === _1_expected;
console.assert(_1_test, 'Test 1');

const _2_expected = 'yzx';
const _2_actual = scramble('x', 'y', 'z');
const _2_test = _2_actual === _2_expected;
console.assert(_2_test, 'Test 2');

const _3_expected = 'yxz';
const _3_actual = scramble('z', 'y', 'x');
const _3_test = _3_actual === _3_expected;
console.assert(_3_test, 'Test 3');

const _4_expected = 'xzy';
const _4_actual = scramble('y', 'x', 'z');
const _4_test = _4_actual === _4_expected;
console.assert(_4_test, 'Test 4');

console.log('-- end --');

/* let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
} else {
console.log("Hey. Why didn't you give me a number?");
}

let num = prompt("Please enter a number.");
if (num < 18) {
  console.log("You are a child");
}
else if (num < 40) {
  console.log("You are a youth");
  else {console.log("You are an adult"); */

/* let number = 0;
while (number < 15) {
number = number + 2;
console.log(number);}

let result = 1;
let count = 0;
while (count < 10) {
  result = result * 2;
  count++;
}
console.log(result);
console.log(count); */

/* let yourName; 
do {prompt("who are you?");
} while (!yourName);
console.log(yourName) */;


/* switch (prompt("what note are you on?")) {
  case "1":
    console.log("Play Ionian");
    break;
  case "2":
    console.log("Play Dorian");
    break;
  case "3":
    console.log("Play Phrygian");
    break;
  case "4":
    console.log("Play Lydian");
    break;
  case "5":
    console.log("Play Mixolydian");
    break;
  case "6":
    console.log("Play Aeolian");
    break;
  case "7":
    console.log("Play Locrian");
    break;
  default:
    console.log("Unknown note!");
} */


/* let row;
for (row ="#"; row.length < 8; row+="#") {
  console.log(row);
}
 */


/* let number;
for (number = 1; number <= 100; number++) {
if (number % 3 === 0 && number % 5 !== 0) {
  console.log("Fizz");
}
else if (number % 5 === 0 && number % 3 !== 0) {
  console.log("Buzz");
}
else if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
}
else {
	console.log(number);
}
} */
