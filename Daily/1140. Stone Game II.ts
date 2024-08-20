// function stoneGameII(piles: number[]): number {

// // let maxInArray = Math.max(...piles); 
// // console.log(maxInArray)


// let Alice = []
// let Bob = []
// let roundCounter = 1
// // ideally we have a loop that goes over piles[] and each round the roundCounter increments
// // and each round players take more piles from piles[]. ??  idk






//     return 10
// };



// so i guess the idea is that alice starts first and then bob etc
// but every round each of them can take more piles: so alice starts with one pile, bob takes two, 
// then alice takes two, bob takes three , alice takes three etc

// and they each play optimally? so i guess they will always try to take largest pile? starting from smallest?
// so alice takes example 2 , bob takes 2 and 4 , then alice takes 5 and 7 etc. bob takes 9 and 10 and 11 etc


function stoneGameII(piles: number[]): number {
    const n = piles.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    const suffixSum = Array(n).fill(0);

    // Suffix sum to calculate remaining stones
    suffixSum[n - 1] = piles[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    function dfs(i, M) {
        if (i == n) return 0;  // No more piles
        if (2 * M >= n - i) return suffixSum[i];  // Take all remaining piles

        if (dp[i][M] > 0) return dp[i][M];  // If already computed

        let maxStones = 0;
        for (let X = 1; X <= 2 * M; X++) {
            maxStones = Math.max(maxStones, suffixSum[i] - dfs(i + X, Math.max(M, X)));
        }

        dp[i][M] = maxStones;
        return maxStones;
    }

    return dfs(0, 1);  // Start at index 0 with M = 1
}



// Key Points of the Game:

//     Players: Alice starts first, followed by Bob. Each player tries to collect the most stones by the end.
//     M Parameter: On a player's turn, they can take X piles of stones where 1 <= X <= 2 * M. After a player takes X piles, the next value of M is updated to max(M, X).
//     Game End: The game continues until all piles are taken. The goal is for Alice to collect the maximum number of stones by the end.
//     Optimal Play: Alice and Bob play optimally, meaning they both make the best possible move on their turn to maximize their total number of stones.

// Problem Understanding:

//     Alice and Bob's Strategies:
//         Alice will try to maximize her stones, but she also has to think about the future. Taking too many stones now could allow Bob to take more later.
//         Bob will play optimally too, meaning he will try to take as many stones as possible and minimize Alice's future options.

// What does "playing optimally" mean here?

// Playing optimally means each player looks ahead and makes a decision that maximizes their final score, considering both their current and future turns.
// Example Walkthrough:

// Let's take the input piles = [2,7,9,4,4] as an example:

//     Initially, Alice can take either 1 or 2 piles (because M = 1), meaning she can take up to 2 * 1 = 2 piles.
//         If Alice takes the first pile (value 2), then Bob can take up to 2 piles from [7,9,4,4].
//         If Alice takes two piles (2 + 7), Bob can take up to 2 piles from [9,4,4].

// You can see that each player's choice affects the options of the next player.
// Correct Strategy:

//     Since both players are playing optimally, Alice won't necessarily just take the largest pile upfront. Instead, she'll consider the consequences of each move, ensuring she sets herself up for the highest possible score by the end of the game.

// Dynamic Programming Approach:

// The optimal strategy can be determined using a dynamic programming (DP) approach, where you recursively simulate the game and store intermediate results to avoid recalculating subproblems. You can store the maximum number of stones Alice can collect starting from a particular pile with a certain value of M.







// How It Works:

//     Suffix Sum: We use this to keep track of the total stones left from the current pile to the end.
//     Recursive Function: dfs(i, M) calculates the maximum stones Alice can collect starting from the i-th pile with M as the current multiplier.
//     Base Cases:
//         If there are no piles left, return 0.
//         If 2 * M is greater than or equal to the remaining piles, Alice can take all of them.
//     Recursive Case: Alice tries every possible move (from 1 to 2 * M piles) and calculates how many stones she can collect while forcing Bob to get the worst outcome.

// Explanation of Example:

// For piles = [2,7,9,4,4]:

//     Alice can start by taking either 1 or 2 piles, and the algorithm will evaluate the optimal strategy by considering how Bob would respond.

// I hope this clears up your confusion! The problem can indeed be tricky because of the "optimal play" requirement, which needs careful simulation of both Alice and Bob's choices.