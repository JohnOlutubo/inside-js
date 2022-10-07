// #todo

'use strict';

console.log('-- begin --');

let fruit = 'banana';
let desert = 'cake';
let topping = 'frosting';

// _;
desert = 'chocolate ' + desert;
console.assert(desert === 'chocolate cake', 'Test 1');

desert = desert + ' with ' + topping;
// console.assert(desert === _, 'Test 2');
console.assert(desert === 'chocolate cake with frosting', 'Test 2');


console.log('-- end --');
