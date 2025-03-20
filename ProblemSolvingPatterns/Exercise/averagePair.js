function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === num) {
            return true;
        }

        if (average < num) {
            start++;
            continue;
        }

        end--;
    }

    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
