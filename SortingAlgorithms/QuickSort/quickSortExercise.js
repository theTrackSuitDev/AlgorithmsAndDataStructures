function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    let pivotVal = arr[start];
    let currentPivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (comparator(arr[i], pivotVal) < 0) {
            currentPivotIndex++;
            swap(arr, i, currentPivotIndex);
        }
    }

    swap(arr, start, currentPivotIndex);
    return currentPivotIndex;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    if (start < end) {
        let pivotIndex = pivot(arr, comparator, start, end);
        quickSort(arr, comparator, start, pivotIndex - 1);
        quickSort(arr, comparator, pivotIndex + 1, end);
    }

    return arr;
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

console.log(...quickSort(moarKittyData, oldestToYoungest));
