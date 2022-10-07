// #todo

'use strict';

console.log('-- begin --');

/* fill in the blanks to pass the assertions

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

// __;
let furniture = 'chair';
console.assert(furniture === 'chair', 'Test 1');

// __;
let building = 'house';
console.assert(building === 'house', 'Test 2');

furniture = 'table';
// console.assert(__ === __, 'Test 3');
console.assert(furniture === 'table', 'Test 3');

// __;
let food = '';
console.assert(food === '', 'Test 4');

// __ = 'apple';
// console.assert(food === __, 'Test 5');
food = 'apple';
console.assert(food === 'apple', 'Test 5');

// console.assert(__ === 'house', 'Test 6');
console.assert(building === 'house', 'Test 6');

// console.assert(__ === 'table', 'Test 7');
console.assert(furniture === 'table', 'Test 7');

// food = __;
food = 'pear';
console.assert(food === 'pear', 'Test 8');

console.log('-- end --');
