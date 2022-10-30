// Given a number, return the total sum of that number multiplied by every number between 1 and 10.

let totalSum = 0;
let num = 3;	
	for (let count = 1; count <= 10; count++){
		totalSum += num * count
		console.log(totalSum)
	}
	
