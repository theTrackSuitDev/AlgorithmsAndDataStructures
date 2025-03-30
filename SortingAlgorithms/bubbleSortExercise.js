function bubbleSort(arr, comparator) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    let inputArr = arr.slice();

    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    for (let i = inputArr.length - 1; i >= 0; i--) {
        let sorted = true;
        for (let j = 0; j < i; j++) {
            if (comparator(inputArr[j], inputArr[j + 1]) > 0) {
                swap(inputArr, j, j + 1);
                sorted = false;
            }
        }

        if (sorted) {
            break;
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

console.log(...bubbleSort(moarKittyData, oldestToYoungest));
