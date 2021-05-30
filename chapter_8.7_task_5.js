function TaskFive() {

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

    } else {
        alert('Sorry you didn\'t enter a number');
    }

    console.log(arr);

}