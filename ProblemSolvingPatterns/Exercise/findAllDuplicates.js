function findAllDuplicates(arr) {
    let result = [];
    let frequencyObj = {};

    if (arr.length === 0) {
        return result;
    }

    for (const el of arr) {
        frequencyObj[el] = (frequencyObj[el] || 0) + 1;
        if (frequencyObj[el] === 2) {
            result.push(el);
        }
    }

    return result;
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
