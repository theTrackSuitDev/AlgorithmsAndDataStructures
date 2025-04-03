function getDigit(num, position) {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    }

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = digitCount(arr[i]);
        if (count > max) {
            max = count;
        }
    }

    return max;
}

function radixSort(arr) {
    const maxDigits = mostDigits(arr);

    for (let i = 0; i < maxDigits; i++) {
        let bucketsArr = [];
        for (let j = 0; j <= 9; j++) {
            bucketsArr[j] = [];
        }

        for (let k = 0; k < arr.length; k++) {
            let currentDigit = getDigit(arr[k], i);
            bucketsArr[currentDigit].push(arr[k]);
        }

        let newArr = [];
        for (let l = 0; l <= 9; l++) {
            newArr = newArr.concat(bucketsArr[l]);
        }
        arr = newArr;
    }

    return arr;
}

console.log(radixSort([5, 1, 343, 2, 93, 4, 855, 4789]));
