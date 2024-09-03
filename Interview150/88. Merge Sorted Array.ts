// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.





function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Last index of nums1 array after merge
    let last = m + n - 1;
    
    // Merge in reverse order to avoid overwriting values in nums1
    let i = m - 1; // Last element in nums1
    let j = n - 1; // Last element in nums2

    // While there are elements to examine in both arrays
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[last] = nums1[i];
            i--;
        } else {
            nums1[last] = nums2[j];
            j--;
        }
        last--;
    }

    // Copy any remaining elements from nums2 into nums1
    while (j >= 0) {
        nums1[last] = nums2[j];
        j--;
        last--;
    }
}
