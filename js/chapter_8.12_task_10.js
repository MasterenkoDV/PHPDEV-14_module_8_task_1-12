function TaskTen() {

    valueX = prompt('Enter the value \"X\" from the range 0 to 1000');

    while (true) {
        if (isNaN(+valueX) === false && typeof (+valueX) == 'number' && valueX > -1 && valueX < 1001 || valueX === null) break
        alert('Sorry, you entered an incorrect value');
        valueX = prompt('Enter the value \"X\" from the range 0 to 1000');
    }

    answer = true;

    for (let i = 2; i < valueX + 1; i++) {
        if (valueX % i == 0) {
            answer = false;
            break;
        }
    }

    if (valueX == 0) {
        console.log('The number \"0\" was entered"');
    } else if (answer = true) {
        console.log('The entered number is a prime number');
    } else {
        console.log('The entered number is a composite number');
    }
}