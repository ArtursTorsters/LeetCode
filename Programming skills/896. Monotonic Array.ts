// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.


function isMonotonic(nums: number[]): boolean {
    console.log(nums)

    let isIncreasing = false;
    let isDecreasing = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            isIncreasing = true;
        }
        if (nums[i] < nums[i - 1]) {
            isDecreasing = true;
        }

        if (isIncreasing && isDecreasing) {
            return false;
        }
    }

    return true
}




    // Initialize two boolean variables: isIncreasing and isDecreasing to false
    // Start the loop from index 1 compare with its previous element.
    // If an element is greater than its previous element then set isIncreasing=true(means the array is increasing)
    // If an element is smaller than its previous element then set isDecreasing=true(means the array is decreasing)
    // if both isIncreasing and isDecreasing are true then return false and break as the array is neither increasing nor decreasing and we don't have to continue the loop.
    // Was it helpful ... support by upvote.