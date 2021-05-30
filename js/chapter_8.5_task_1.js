function TaskOne() {

	enteredValue = prompt('Enter any value');
	enteredValue = +enteredValue;

	if (isNaN(enteredValue) === true || typeof (enteredValue) !== 'number') {
		console.log("Oops, I think you made a mistake");
	} else if (enteredValue % 2 == '0') {
		console.log("You entered an even number");
	} else {
		console.log("You entered an odd number");
	}

}