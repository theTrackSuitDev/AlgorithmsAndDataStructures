function insertionSort(arr) {
    let inputArr = arr.slice();

    for (let i = 1; i < inputArr.length; i++) {
        let val = inputArr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (inputArr[j] > val) {
                inputArr[j + 1] = inputArr[j];
            } else {
                break;
            }
        }

        inputArr[j + 1] = val;
    }
    return inputArr;
}

console.log(insertionSort([2, 3, 4, -5, 1]));
