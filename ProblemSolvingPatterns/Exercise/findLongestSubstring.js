function findLongestSubstring(str) {
    let start = 0;
    let end = 0;
    let substringMap = new Map();
    let maxLength = 0;

    while (end < str.length) {
        if (substringMap.has(str[end])) {
            start = Math.max(start, substringMap.get(str[end]) + 1);
        }

        maxLength = Math.max(end - start + 1, maxLength);

        substringMap.set(str[end], end);
        end++;
    }

    return maxLength;
}

console.log(findLongestSubstring("thecatinthehat"));
