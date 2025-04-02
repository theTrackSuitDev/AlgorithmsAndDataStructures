function merge(arr1, arr2, comparator) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

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

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator));
