function bubbleSort(arr) {
    let inputArr = arr.slice();

    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    for (let i = inputArr.length - 1; i >= 0; i--) {
        let sorted = true;
        for (let j = 0; j < i; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                swap(inputArr, j, j + 1);
                sorted = false;
            }
        }

        if (sorted) {
            break;
        }
    }

    return inputArr;
}

console.log(bubbleSort([1, 2, 3, 4, 5, 0]));
