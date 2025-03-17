function searchInSortedArray(arr, val) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        let middleValue = arr[middleIndex];
        if (middleValue === val) {
            return middleIndex;
        }

        if (middleValue > val) {
            lastIndex = middleIndex - 1;
            continue;
        }

        firstIndex = middleIndex + 1;
        // This handles middleValue < val cases without checking.
    }

    return -1;
}

console.log(searchInSortedArray([1, 2, 3, 13, 14, 25], 14));
