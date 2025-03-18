function constructNote(message, letters) {
    const lettersObj = {};

    if (letters.length === 0) {
        return false;
    }

    for (const char of letters) {
        lettersObj[char] = (lettersObj[char] || 0) + 1;
    }

    for (const char of message) {
        if (!lettersObj[char]) {
            return false;
        }

        lettersObj[char]--;
    }

    return true;
}

console.log(constructNote("gjhjhj", "fdfdfs"));
