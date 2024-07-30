// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


function moveZeroes(nums: number[]): void {
    // Filter out the zero elements and keep the non-zero elements in order
    const nonZeroes = nums.filter(num => num !== 0);
    
    // Count the number of zero elements
    const zeroCount = nums.length - nonZeroes.length;

    // Create an array of the same number of zeros
    const zeroes = new Array(zeroCount).fill(0);

    // Concatenate the non-zero elements with the zeroes array
    const result = nonZeroes.concat(zeroes);

    // Copy the result back into the original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};