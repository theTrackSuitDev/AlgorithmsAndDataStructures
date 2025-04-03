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
