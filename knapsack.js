function knapsack(weights, values, capacity) {
    const n = weights.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    console.log(`Maximum value in Knapsack: ${dp[n][capacity]}`);
}

knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5);