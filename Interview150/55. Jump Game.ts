// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

function canJump(nums: number[]): boolean {
    let furthest = 0; // This will keep track of the furthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        // If the current index is greater than the furthest index we can reach, return false
        if (i > furthest) {
            return false;
        }
        
        // Update the furthest index we can reach
        furthest = Math.max(furthest, i + nums[i]);

        // If the furthest we can reach is beyond or at the last index, return true
        if (furthest >= nums.length - 1) {
            return true;
        }
    }

    return false;
}
