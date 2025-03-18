function areThereDuplicates(...argArr) {
    let frequencyObj = {};

    for (const arg of argArr) {
        frequencyObj[arg] = (frequencyObj[arg] || 0) + 1;
        if (frequencyObj[arg] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
