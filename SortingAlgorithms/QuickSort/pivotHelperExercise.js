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

var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strLength(a, b) {
  return a.length - b.length
}

console.log(pivot(arr3, strLength));