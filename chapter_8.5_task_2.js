function TaskTwo() {

	valueX = prompt('Enter value \"X\"');

	if (isNaN(+valueX) === false && typeof (+valueX) == 'number') {
		console.log(valueX + " - number");
	} else if (valueX == 'true' || valueX == 'false') {
		console.log(valueX + " - logical type");
	} else if (typeof valueX === 'string') {
		console.log(valueX + " - string");
	} else {
		console.log("Type value \"X\" is not defined");
	}

}