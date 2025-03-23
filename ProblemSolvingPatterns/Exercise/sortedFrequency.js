function sortedFrequency(arr, num) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    let firstFoundIndex = -1;
    let lastFoundIndex = -1;
    let count = -1;

    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        let middleValue = arr[middleIndex];
        if (middleValue === num) {
            firstFoundIndex = middleIndex;
            lastIndex = middleIndex - 1;
            continue;
        }

        if (middleValue > num) {
            lastIndex = middleIndex - 1;
            continue;
        }

        firstIndex = middleIndex + 1;
    }

    firstIndex = 0;
    lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        let middleValue = arr[middleIndex];
        if (middleValue === num) {
            lastFoundIndex = middleIndex;
            firstIndex = middleIndex + 1;
            continue;
        }

        if (middleValue > num) {
            lastIndex = middleIndex - 1;
            continue;
        }

        firstIndex = middleIndex + 1;
    }

    if (firstFoundIndex === -1 && lastFoundIndex === -1) {
        return count;
    }

    if (firstFoundIndex === lastFoundIndex) {
        return 1;
    }

    count = Math.abs(firstFoundIndex - lastFoundIndex) + 1;
    return count;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],4));
