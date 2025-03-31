function selectionSort(arr, comparator) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    let inputArr = arr.slice();

    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    for (let i = 0; i < inputArr.length - 1; i++) {
        let minValueIndex = i;

        for (let j = i + 1; j < inputArr.length; j++) {
            if (comparator(inputArr[j], inputArr[minValueIndex]) < 0) {
                minValueIndex = j;
            }
        }

        if (i !== minValueIndex) {
            swap(inputArr, i, minValueIndex);
        }
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

console.log(...selectionSort(moarKittyData, oldestToYoungest));
