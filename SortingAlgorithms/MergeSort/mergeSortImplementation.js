function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, middleIndex));
    let secondHalf = mergeSort(arr.slice(middleIndex));
    return merge(firstHalf, secondHalf);
}

console.log(mergeSort([1, 5, 0, 99, 4, 2, 120, 77, -9]));

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
