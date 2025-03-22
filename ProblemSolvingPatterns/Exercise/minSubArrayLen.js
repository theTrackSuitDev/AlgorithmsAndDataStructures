function minSubArrayLen(arr, num) {
    let start = 0;
    let end = 0;
    let currentSum = arr[0];
    let minNums = 0;

    while (currentSum < num && end < arr.length - 1) {
        currentSum += arr[end + 1];
        end++;
    }

    if (currentSum < num) {
        return 0;
    }

    minNums = end - start + 1;

    while (end < arr.length && end - start > 0) {
        if (currentSum - arr[start] >= num) {
            currentSum -= arr[start];
            start++;
            if (end - start < minNums) {
                minNums = end - start + 1;
            }
        } else {
            if (end < arr.length - 1) {
                currentSum = currentSum + arr[end + 1];
            }
            end++;
        }
    }

    return minNums;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 400, 2], 39));
