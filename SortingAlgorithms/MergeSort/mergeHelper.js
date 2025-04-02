function merge(arr1, arr2) {
    let arrOne = arr1.slice();
    let arrTwo = arr2.slice();

    let resultArr = [];

    let indexOne = 0;
    let indexTwo = 0;

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        if (arrOne[indexOne] < arrTwo[indexTwo]) {
            resultArr.push(arrOne[indexOne]);
            indexOne++;
        } else if (arrOne[indexOne] > arrTwo[indexTwo]) {
            resultArr.push(arrTwo[indexTwo]);
            indexTwo++;
        } else {
            // (arrOne[indexOne] === arrTwo[indexTwo])
            resultArr.push(arrOne[indexOne]);
            resultArr.push(arrTwo[indexTwo]);
            indexOne++;
            indexTwo++;
        }
    }

    while (indexOne < arrOne.length) {
        resultArr.push(arrOne[indexOne]);
        indexOne++;
    }

    while (indexTwo < arrTwo.length) {
        resultArr.push(arrTwo[indexTwo]);
        indexTwo++;
    }

    return resultArr;
}

console.log(merge([1, 3, 5, 7, 11, 12, 13], [2, 4, 6, 8, 9, 10]));
