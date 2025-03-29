function binarySearch(sortedArray, val) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === val) {
            return middle;
        }

        if (sortedArray[middle] > val) {
            end = middle - 1;
        }

        if (sortedArray[middle] < val) {
            start = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
