function findRotatedIndex(arr, num) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        let firstValue = arr[firstIndex];
        let middleValue = arr[middleIndex];
        let lastValue = arr[lastIndex];
        if (middleValue === num) {
            return middleIndex;
        }
        if (firstValue === num) {
            return firstIndex;
        }
        if (lastValue === num) {
            return lastIndex;
        }
        if (firstValue <= middleValue) {
            if (firstValue < num && num < middleValue) {
                lastIndex = middleIndex - 1;
            } else {
                firstIndex = middleIndex + 1;
            }
        } else {
            if (middleValue < num && num < lastValue) {
                firstIndex = middleIndex + 1;
            } else {
                lastIndex = middleIndex - 1;
            }
        }
    }

    return -1;
}

console.log(findRotatedIndex([7, 8, 9, 1, 2, 3, 4, 5, 6], 9));
