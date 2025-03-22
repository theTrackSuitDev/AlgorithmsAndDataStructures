function findPair(arr, num) {
    const frequencyObj = {}

    for (let i = 0; i < arr.length; i++) {
        frequencyObj[arr[i]] = (frequencyObj[arr[i]] || 0) + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (num === 0 && frequencyObj[arr[i]] && frequencyObj[arr[i]] > 1) {
            return true;
        }

        const diffNumOne = arr[i] - num;
        const diffNumTwo = arr[i] + num;

        if (frequencyObj[diffNumOne] || frequencyObj[diffNumTwo]) {
            return true;
        }
    }

    return false;
}

console.log(findPair([5,5,2], 0));
