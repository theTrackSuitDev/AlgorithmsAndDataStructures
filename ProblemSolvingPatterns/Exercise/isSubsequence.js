function isSubsequence(searchStr, str) {
    let i = 0;
    let j = 0;

    while (i < searchStr.length && j < str.length) {
        if (searchStr[i] === str[j]) {
            i++;
            if (i === searchStr.length) {
                return true;
            }
        }
        j++;
    }

    return false;
}

console.log(isSubsequence("abc", "acb"));
