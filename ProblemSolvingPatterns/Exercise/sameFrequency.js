function sameFrequency(numOne, numTwo) {
    const strOne = numOne.toString();
    const strTwo = numTwo.toString();

    if (strOne.length !== strTwo.length) {
        return false;
    }

    const frequencyObjOne = {};
    for (const char of strOne) {
        frequencyObjOne[char] = (frequencyObjOne[char] || 0) + 1;
    }

    const frequencyObjTwo = {};
    for (const char of strTwo) {
        frequencyObjTwo[char] = (frequencyObjTwo[char] || 0) + 1;
    }

    for (const char in frequencyObjOne) {
        // if (!Object.hasOwn(frequencyObjTwo, char)) {
        if (!frequencyObjTwo.hasOwnProperty(char)) {
            return false;
        }

        if (frequencyObjOne[char] !== frequencyObjTwo[char]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(123, 321));
