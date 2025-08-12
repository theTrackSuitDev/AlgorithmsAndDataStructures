function fib(num) {
    if (num <= 2) {
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
}

function memoizedFib(num, memo = []) {
    if (memo[num] !== undefined) {
        return memo[num];
    }

    if (num <= 2) {
        return 1;
    }

    let result = memoizedFib(num - 1, memo) + memoizedFib(num - 2, memo);
    memo[num] = result;

    return result;
}

function tabulatedFib(num) {
    if (num <= 2) {
        return 1;
    }

    let fibTab = [undefined, 1, 1];

    for (let i = 3; i <= num; i++) {
        fibTab[i] = fibTab[i - 1] + fibTab[i - 2];
    }

    return fibTab[num];
}

// console.log(fib(45));
// console.log(memoizedFib(100));
console.log(tabulatedFib(100));
