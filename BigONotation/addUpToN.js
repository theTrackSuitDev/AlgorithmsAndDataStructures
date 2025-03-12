const { performance } = require("perf_hooks");

function addUpToN1(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

function addUpToN2(n) {
    return (n * (n + 1)) / 2;
}

const start1 = performance.now();
const result1 = addUpToN1(100000000);
const finish1 = performance.now();
// O(n)
console.log(`V1 result: ${result1}`);
console.log(`V1 time: ${((finish1 - start1) / 1000).toFixed(10)} seconds.`);

const start2 = performance.now();
const result2 = addUpToN2(100000000);
const finish2 = performance.now();
// O(1)
console.log(`V2 result: ${result2}`);
console.log(`V2 time: ${((finish2 - start2) / 1000).toFixed(10)} seconds.`);
