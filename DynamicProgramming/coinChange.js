function minCoinChange(coinsArr = [], amount) {
    let result = [];

    while (amount !== 0) {
        while (coinsArr.length) {
            let currentCoin = coinsArr.pop();
            if (amount >= currentCoin) {
                let coinsUsed = Math.trunc(amount / currentCoin);
                amount = amount % (coinsUsed * currentCoin);
                for (let i = 0; i < coinsUsed; i++) {
                    result.push(currentCoin);
                }
            }
        }
    }

    return result;
}

function coinChange(coins, value) {
    let tab = new Array(value + 1);
    tab.fill(0);
    tab[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= value; j++) {
            tab[j] += tab[j - coins[i]];
        }
    }
    return tab[value];
}

console.log(minCoinChange([5, 10, 15, 20, 25], 85));
console.log(coinChange([1, 5, 10, 25], 25));
