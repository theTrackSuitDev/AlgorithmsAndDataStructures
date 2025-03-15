function countUniqueValues(arr) {
    let uniqueCounter = 0;
    let pointerOne = 0;
    let pointerTwo = 1;

    if (arr.length === 1) {
        return 1;
    }

    while (pointerOne < arr.length) {
        if (arr[pointerOne] !== arr[pointerTwo]) {
            uniqueCounter++;
            pointerOne = pointerTwo;
        }

        if (pointerTwo < arr.length) {
            pointerTwo++;
        }
    }

    return uniqueCounter;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
