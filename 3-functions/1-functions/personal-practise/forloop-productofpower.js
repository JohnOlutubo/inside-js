// A function that returns the product of a given number and the '2 exponential' of another.

function shiftToLeft(x, y) {
	let result = 1
	for (count=0; count < y; count++){
		result = result*2;
	}
	return x * result
}

shiftToLeft(5,2)