// Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.

// Alice and Bob take turns, with Alice starting first. On each player's turn, that player can take 1, 2, or 3 stones from the first remaining stones in the row.

// The score of each player is the sum of the values of the stones taken. The score of each player is 0 initially.

// The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken.

// Assume Alice and Bob play optimally.

// Return "Alice" if Alice will win, "Bob" if Bob will win, or "Tie" if they will end the game with the same score.


// function stoneGameIII(stoneValue: number[]): string {
    
//     // let Bob = []
//     let Alice = []
    
//     for (let i = 0; i < Math.min(stoneValue.length, 3); i++) {
//         // console.log(stoneValue[i]);
//         // push first 3 to alice
//          Alice.push(stoneValue[i]);
//     }
//     // sum of alice stones
//     let aliceSum = Alice.reduce((acc, curr) => acc + curr, 0); 
    
    
//     if(aliceSum > (stoneValue[stoneValue.length - 1])){
//         return "Alice"
//     } else if(aliceSum < (stoneValue[stoneValue.length - 1])){
//         return "Bob"
//     } else {
//         return "Tie"
//     }    
//     };



    function stoneGameIII(stoneValue: number[]): string {

        const n = stoneValue.length;
        const dp = new Array(n + 1).fill(Number.NEGATIVE_INFINITY);
        dp[n] = 0; // Base case: no stones left, score is 0
    
        // Iterate backward through the stoneValue array
        for (let i = n - 1; i >= 0; i--) {
            let takeSum = 0;
            // Alice can take 1, 2, or 3 piles
            for (let x = 1; x <= 3; x++) {
                if (i + x <= n) {
                    takeSum += stoneValue[i + x - 1];
                    dp[i] = Math.max(dp[i], takeSum - dp[i + x]);
                }
            }
        }
    
        if (dp[0] > 0) {
            return "Alice";
        } else if (dp[0] < 0) {
            return "Bob";
        } else {
            return "Tie";
        }
    }
    