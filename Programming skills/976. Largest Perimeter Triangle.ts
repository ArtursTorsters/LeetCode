// Given an integer array nums, return the largest perimeter of 
// a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.


function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    // Iterate from the end of the array to find the largest valid triangle
    for (let i = nums.length - 1; i >= 2; i--) {
        //  [1,2,1,10].  so we iterate from back and firs is 10
        // a = 10 -2 = 2 , b = 10 -1 = 1 , c = 10
        let a = nums[i - 2];
        let b = nums[i - 1];
        let c = nums[i];
        
        if (a + b > c) {
            return a + b + c;
        }
    }
        return 0;
}


// Approach:

//     Sort the Array: Start by sorting the array in non-decreasing order. This helps in easily checking the triangle inequality theorem by considering the largest possible sides first.

//     Check Triplets: Iterate through the sorted array from the largest end, and check every triplet to see if it forms a valid triangle. Start from the end of the array and work backwards to maximize the perimeter.

//     Return Result: Return the perimeter of the first valid triangle found. If no valid triangle can be formed, return 0.

// Example:

// Consider an array [3, 6, 2, 5].

//     Sort the Array: [2, 3, 5, 6]

//     Check Triplets:
//         Check the triplet (5, 6, 2):
//             2+5>62+5>6 (True)
//         Check the triplet (2, 5, 6):
//             2+5>62+5>6 (True)
//             2+6>52+6>5 (True)
//             5+6>25+6>2 (True)
//         This triplet forms a valid triangle.

//     Calculate Perimeter:
//         The perimeter of (2, 5, 6) is 2+5+6=132+5+6=13.

// Thus, the largest perimeter of a triangle that can be formed is 13. If no such triangle can be formed from the given lengths, the function should return 0.

// This approach ensures that you efficiently find the maximum perimeter by leveraging sorting and the triangle inequality theorem.