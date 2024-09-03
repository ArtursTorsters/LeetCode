// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let maybeMoreThan = null; 
    let count = 0; // The count of how many times the current maybeMoreThan has been seen

    
    for (let num of nums) {
        // If count is zero, update the maybeMoreThan to the current number
        if (count === 0) {
            maybeMoreThan = num;
        }
        // Update the count: increment if the current number matches the maybeMoreThan, otherwise decrement
        count += (num === maybeMoreThan) ? 1 : -1;
    }

    // Return the maybeMoreThan which is now the majority element
    return maybeMoreThan;
}