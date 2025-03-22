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

console.log(maxSubarraySum([2,3], 3));

