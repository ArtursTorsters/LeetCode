// There is a function signFunc(x) that returns:

//     1 if x is positive.
//     -1 if x is negative.
//     0 if x is equal to 0.

// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).


function arraySign(nums: number[]): number {
    let hasZero = false;
    let negativeCount = 0;

    for (const num of nums) {
        if (num === 0) {
            hasZero = true;
            break; 
        }
        // if number less than 0 we incre till -1
        if (num < 0) {
            negativeCount++;
        }
    }
 // if 0 then it is 0
    if (hasZero) {
        return 0;
    }

    // If the count of negative numbers is odd, product is negative; otherwise, it is positive
    return negativeCount % 2 === 0 ? 1 : -1;
}
