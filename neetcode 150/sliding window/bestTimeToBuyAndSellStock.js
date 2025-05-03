// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


// SOLUTION 1
// var maxProfit = function(prices) {
//     let left = 0
//     let maxProfit = 0
    
//     for(let right = 1 ; right < prices.length; right++ ){

//             if(prices[right] < prices[left]){
//                 left = right
 
//                 continue
//             } 
        
        
//             if(prices[right] - prices[left] > maxProfit){
                    
//                     maxProfit = prices[right] - prices[left]

//             }
//     }
    
//     return maxProfit
// };

// SOLUTION 2
/*
1. Create a left pointer (index 0) and right pointer (index 1)
2. Iterate throught the array using a while loop with condition right <= prices.length - 1
3. If left > right, move left pointer by setting left = right and right += 1
4. Compare right - left with max profit
5. Continue to loop by incrementing right pointer 
*/

var maxProfit = function(prices) {
    
    let maxProfit = 0

    if(prices.length < 1) {
        return maxProfit
    }

    let left = 0
    let right = 1

    while(right <= prices.length - 1){

        if(prices[left] > prices[right]){
            left = right
            right += 1
            continue
        }

        let profit = prices[right] - prices[left]

        if(profit > maxProfit){
            maxProfit = profit
        }   

        right++
    }

    console.log(maxProfit)

    return maxProfit
};