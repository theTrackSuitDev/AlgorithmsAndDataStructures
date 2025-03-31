function insertionSort(arr, comparator) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    let inputArr = arr.slice();

    for (let i = 1; i < inputArr.length; i++) {
        let val = inputArr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (comparator(val, inputArr[j]) < 0) {
                inputArr[j + 1] = inputArr[j];
            } else {
                break;
            }
        }

        inputArr[j + 1] = val;
    }
    return inputArr;
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

console.log(...insertionSort(moarKittyData, oldestToYoungest));
