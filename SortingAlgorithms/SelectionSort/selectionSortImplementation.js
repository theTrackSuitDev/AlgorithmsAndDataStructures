function selectionSort(arr) {
    let inputArr = arr.slice();

    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    for (let i = 0; i < inputArr.length - 1; i++) {
        let minValueIndex = i;

        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[j] < inputArr[minValueIndex]) {
                minValueIndex = j;
            }
        }

        if (i !== minValueIndex) {
            swap(inputArr, i, minValueIndex);
        }
    }

    return inputArr;
}

console.log(selectionSort([5, 50, 8, 9, 1, 3, 2]));
