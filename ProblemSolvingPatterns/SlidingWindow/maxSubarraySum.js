function maxSubarraySumNaive(arr, num) {
    if (arr.length < num) {
        return null;
    }

    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    let start = 0;
    let end = num - 1;

    while (end < arr.length) {
        for (let i = start; i <= end; i++) {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        start++;
        end++;
        currentSum = 0;
    }

    return maxSum;
}

function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }

    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < num; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    for (let j = num; j < arr.length; j++) {
        currentSum = currentSum - arr[j - num] + arr[j];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([11, 1, 2, 3, 4, 5, 6], 2));
