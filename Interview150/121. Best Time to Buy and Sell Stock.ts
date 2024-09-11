// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



function maxProfit(prices: number[]): number {
    if(prices.length === 1) {
        return 0
    }
       let smallest = prices[0];  // Start with the first price as the smallest
        let maxProfit = 0;        
    
        for (let i = 1; i < prices.length; i++) {
            // 1. If the current price is cheaper than any seen before, update the smallest price
            if (prices[i] < smallest) {
                smallest = prices[i];
            }
    
            // 2. Calculate the potential profit with the current price and update maxProfit if it's greater
            let profit = prices[i] - smallest;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    
        return maxProfit;
    }