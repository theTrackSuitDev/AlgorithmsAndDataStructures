function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    let pivotVal = arr[start];
    let currentPivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivotVal > arr[i]) {
            currentPivotIndex++;
            swap(arr, i, currentPivotIndex);
        }
    }

    swap(arr, start, currentPivotIndex);
    return currentPivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }

    return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
