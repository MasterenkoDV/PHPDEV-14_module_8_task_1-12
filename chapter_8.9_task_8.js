function TaskEight() {

    let fruits = new Map([

        ["apple", "green"],

        ["strawberry", "red"],

        ["blueberry", "blue"]

    ]);

    console.log(fruits);

    keysElement = [];
    valueElements = [];
    key = [];
    value = [];

    for (let name of fruits.keys()) {
        keysElement.unshift(name);
        key.unshift('key - ' + name);
    }

    for (let property of fruits.values()) {
        valueElements.unshift(property);
        value.unshift('value - ' + property);
    }

    function stitch(key, value) {
        var elementsArray = [];
        var length = Math.max(key.length, value.length);
        for (var i = 0; i < length; i++) {
            i < key.length && elementsArray.push(key[i]);
            i < value.length && elementsArray.push(value[i]);
        }
        return elementsArray;
    }

    console.log('All keys array : ' + keysElement);
    console.log('All values array : ' + valueElements);
    console.log(stitch(key, value));

}