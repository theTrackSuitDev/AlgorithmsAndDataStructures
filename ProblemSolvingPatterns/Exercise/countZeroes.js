function countZeroes(arr) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    if (arr.length === 1) {
        return arr[0] ? 0 : 1;
    }

    while (firstIndex < lastIndex && firstIndex >= 0) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        let middleValue = arr[middleIndex];
        let nextValue = arr[middleIndex + 1];
        let previousValue = arr[middleIndex - 1];
        if (middleValue === 0 && previousValue === 1) {
            return arr.length - middleIndex;
        }

        if (middleValue === 1 && nextValue === 0) {
            return arr.length - (middleIndex + 1);
        }

        if (middleValue === 0) {
            lastIndex = middleIndex;
        } else {
            firstIndex = middleIndex + 1;
        }
    }

    return arr[0] ? 0 : arr.length;
}

console.log(countZeroes([1,1,1,1]));
