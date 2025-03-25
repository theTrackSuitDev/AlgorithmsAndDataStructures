function fib(num) {
    let fibArr = [1, 1];
    if (num <= 2) {
        return fibArr[num - 1];
    }

    function fibConstructor(fibArr) {
        if (fibArr.length === num) {
            return fibArr;
        }

        return fibConstructor(
            fibArr.concat([
                fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2],
            ])
        );
    }

    return fibConstructor(fibArr)[num - 1];
}

console.log(fib(35));
