function TaskNine() {

    check = confirm('Данное задание полностью копирует задание №7, т.к. в моей форме реализации заданий модуля №8 я изначально реализовал задание №7 в виде функции :) Хотите продолжить проверку?')
    if (check == true) {
        arrayLength = prompt('Enter array length');

        if (isNaN(+arrayLength) === false && typeof (+arrayLength) == 'number') {

            arr = [];
            for (let i = 0; i < arrayLength; i++) {
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

            zero = 0;
            even = 0;
            odd = 0;
            nullElement = 0;
            otherElement = 0;

            for (i = 0; i < arr.length; i++) {

                if (arr[i] === null) {
                    nullElement = nullElement + 1;
                } else if (isNaN(+arr[i]) === false && typeof (+arr[i]) == 'number') {

                    if (arr[i] == 0) {
                        zero = zero + 1;
                    } else if (arr[i] % 2 == 0 && arr[i] !== null) {
                        even = even + 1;
                    } else {
                        odd = odd + 1;
                    }

                } else {
                    otherElement = otherElement + 1;
                }

            }

        } else {
            alert('Sorry you didn\'t enter a number');
        }

        console.log(arr);
        console.log('Zero element - ' + zero);
        console.log('Even number\'s - ' + even);
        console.log('Odd number\'s - ' + odd);
        console.log('Null element - ' + nullElement);
        console.log('Other element - ' + otherElement);

    }
}