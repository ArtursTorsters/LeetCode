// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//     Return k.



// function removeDuplicates(nums: number[]): number {
    
//     let test = nums.sort()
//     let test2 = new Set(test);
//     let test3 = [...test2]
//     console.log(test3)
//     return 0
//     };





function removeDuplicates(nums: number[]): number {
    let set = new Set(nums);

    // set to arr
    let newArr = [...set];

    // Replace the first k elements of nums with unique values from the Set
    let k = newArr.length; // This is the number of unique elements
    for (let i = 0; i < k; i++) {
        nums[i] = newArr[i];
    }

    // Return the count of unique elements
    return k;
}
