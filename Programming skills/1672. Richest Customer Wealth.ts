// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

function maximumWealth(accounts: number[][]): number {




    let maxSum = -Infinity; // Initialize to a very small number
    accounts.forEach(subArray => {
        // console.log(subArray);
    
        // Calculate the sum of the current subArray
        let test = subArray.reduce((acc, curr) => acc + curr, 0); 
        // console.log(test)
       // Update maxSum if the current sum is larger
        maxSum = Math.max(maxSum, test);
        console.log(maxSum);
    });
    
    
        return maxSum
    };


