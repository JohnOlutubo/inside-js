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
let aTree = '';
console.assert(aTree === '', 'Test 1');

aTree = 'birch';
// console.assert(__ === __, 'Test 2');
console.assert(aTree === 'birch', 'Test 2');

// __;
const turtle = 'myrtle';
console.assert(turtle === 'myrtle', 'Test 3');

//__;
aTree = 'aspen';
console.assert(aTree === 'aspen', 'Test 4');

// __;
let aColor = 'blue';
console.assert(aColor === 'blue', 'Test 5');


//console.assert(turtle === __, 'Test 6');
console.assert(turtle === 'myrtle', 'Test 6');

// __ = 'oak';
aTree = 'oak';
//console.assert(aTree === __, 'Test 7');
console.assert(aTree === 'oak', 'Test 7');

// aColor = __;
aColor = 'orange';
// console.assert(__ === 'orange', 'Test 8');
console.assert(aColor === 'orange', 'Test 8');

console.log('-- end --');
