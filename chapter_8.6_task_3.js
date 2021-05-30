function TaskThree() {

    function reverse(reversePhrase) {

        reversePhrase = prompt('Enter a phrase');
        reversePhrase = reversePhrase + "";
        return reversePhrase.split("").reverse().join("");

    }

    console.log(reverse());

}