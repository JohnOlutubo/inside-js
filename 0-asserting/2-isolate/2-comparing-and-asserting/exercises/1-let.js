// #todo

'use strict';

console.log('-- begin --');

// _;
let letters = 'c';
console.assert(letters === 'c', 'Test 1');

// letters = _ + _;
letters = 'b' + letters;
console.assert(letters === 'bc', 'Test 2');

// letters = letters + 'd';
letters = letters + 'd';
console.assert(letters === 'bcd', 'Test 3');

// letters = 'a' + letters;
letters = 'a' + letters;
console.assert(letters === 'abcd', 'Test 4');

// letters = _ + _;
letters = letters + 'e';
console.assert(letters === 'abcde', 'Test 5');

console.log('-- end --');
