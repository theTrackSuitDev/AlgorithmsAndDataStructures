function merge(arr1, arr2, comparator) {
    let arrOne = arr1.slice();
    let arrTwo = arr2.slice();

    let resultArr = [];

    let indexOne = 0;
    let indexTwo = 0;

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        if (comparator(arrOne[indexOne], arrTwo[indexTwo]) < 0) {
            resultArr.push(arrOne[indexOne]);
            indexOne++;
        } else if (comparator(arrOne[indexOne], arrTwo[indexTwo]) > 0) {
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

function mergeSort(arr, comparator) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    if (arr.length < 2) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, middleIndex), comparator);
    let secondHalf = mergeSort(arr.slice(middleIndex), comparator);
    return merge(firstHalf, secondHalf, comparator);
}

var moarKittyData = [
    {
        name: "LilBub",
        age: 7,
    },
    {
        name: "Garfield",
        age: 40,
    },
    {
        name: "Heathcliff",
        age: 45,
    },
    {
        name: "Blue",
        age: 1,
    },
    {
        name: "Grumpy",
        age: 6,
    },
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log(...mergeSort(moarKittyData, oldestToYoungest));
