// #todo

'use strict';

console.log('-- begin --');

console.assert(String(undefined) === undefined, 'Test 1');

console.assert(String(null) === 0, 'Test 2');

console.assert(String(100) === true, 'Test 3');

console.assert(String(true) === true, 'Test 4');

console.assert(String(false) === false, 'Test 5');

console.assert(String(-1) === true, 'Test 6');

console.assert(String(0) === false, 'Test 7');

console.assert(String(Infinity) === true, 'Test 8');

console.assert(String(NaN) === false, 'Test 9');

console.log('-- end --');
