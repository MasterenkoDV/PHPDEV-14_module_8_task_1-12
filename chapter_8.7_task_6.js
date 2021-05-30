function TaskSix() {

    arrayLength = prompt('Enter array length');

    if (isNaN(+arrayLength) === false && typeof (+arrayLength) == 'number') {

        arr = [];
        for (var i = 0; i < arrayLength; i++) {
            arr[i] = prompt('Enter ' + (i + 1) + '/' + arrayLength + ' element massive');

            while (true) {
                if (arr[i] !== '') break
                alert('Sorry, you didn\'t enter the value of the element');
                arr[i] = prompt('Enter ' + (i + 1) + ' element massive');
            }

            if (arr[i] === null) {
                alert('The \'null\' element will be added to the array');
            }

        }

        differences = 0;


        for (i = 0; i < arr.length; i++) {
            if (arr[0] != arr[i]) {
                differences = differences + 1;
                break;
            }
        }

        if (differences == 0) {
            console.log('true')
        } else {
            console.log('false')
        }



    } else {
        alert('Sorry you didn\'t enter a number');
    }

}