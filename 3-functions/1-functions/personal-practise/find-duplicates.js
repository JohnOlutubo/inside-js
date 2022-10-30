// Write a function that takes an array as an argument.
// Your task is to write the repeating elements in the array at the end of the array.
// Return the original array if no duplicate items.
// If there is more than one repeating element, sort the repeating elements from smallest to largest.

const findDuplicates = (numArr) => {
  const nonDuplicates = [];
  const duplicates = [];
}
  numArr.forEach(element, i) => {
    if(duplicates.includes(element) !== -1) {
      duplicates.push(element);
      return;
    }
    if(numArr.indexOf(element) !== -1) {
      duplicates.push(element);
    } else {
      nonDuplicates.push(element);
    }
  };
  return  [...nonDuplicates, ...duplicates.sort((a,b) => a - b)]




console.log(findDuplicate([1,2,4,5,4,8])); // should return [1, 2, 5, 8, 4, 4]
console.log(findDuplicate([1, 2, 3])); // should return  [1, 2, 3]
console.log(findDuplicate([5,5,1,6,7,4])); // should return [1, 6, 7, 4, 5, 5]
console.log(findDuplicate([1,2,11,2,5,11])); // should return [1, 5, 2, 2, 11, 11]