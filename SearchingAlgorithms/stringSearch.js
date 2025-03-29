function stringSearchNaive(strOne, strTwo) {
    let count = 0;

    for (let i = 0; i < strOne.length; i++) {
        if (strOne[i] === strTwo[0]) {
            if (strTwo.length === 1) {
                count++;
            }
            
            for (let j = 1; j < strTwo.length; j++) {
                if (strTwo[j] !== strOne[i + j]) {
                    break;
                }

                if (j === strTwo.length - 1) {
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(stringSearchNaive("wowomgzomg", "omg"));
