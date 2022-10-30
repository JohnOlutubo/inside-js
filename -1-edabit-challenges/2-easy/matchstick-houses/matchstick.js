/* Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

Notes
Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.
Think of the input (step) as the total number of houses that have been connected together.

*/

//SOlution that came to mind through my thought process

function matchHouses(step) {
  if (step === 0) {
    console.log(0 + " matchsticks");
  } else {
	const matchsticks = 5 * step + 1;
  console.log(matchsticks + " Matchsticks");
  }
}

matchHouses(0)

// Solution after researching faster methods
/* 
(source: MDN web docs)
Conditional (ternary) operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy 
followed by a colon (:), and finally the expression to execute if the condition is falsy. 
This operator is frequently used as an alternative to an if...else statement.
*/

function matchHouses(step) {
  const matchsticks = 5 * step + 1;
  console.log(step ? `${matchsticks} Matchsticks`: 0 + " Matchsticks");
}

matchHouses(11)