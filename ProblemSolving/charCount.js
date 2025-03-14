// Write a function that takes in a string and returns the count of each character in the string.
// Count only alphanumeric characters. Ignore casing.

function countChars(str) {
    if (typeof str !== "string") {
        return "Invalid input!";
    }

    const inputStr = str.toLowerCase();
    const inputStrArr = inputStr.split("");
    const resultObj = {};

    inputStrArr.forEach((char) => {
        if (char.match(/[a-z0-9]/)) {
            if (resultObj.hasOwnProperty(char)) { // This can be checked more efficiently.
                resultObj[char] += 1;
            } else {
                resultObj[char] = 1;
            }
        }
    });

    return resultObj;
}

console.log(countChars("aaaAAA BBB 123 444 ,.*&%#%_"));
