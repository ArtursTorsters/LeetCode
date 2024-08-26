// Given an m x n matrix, return all elements of the matrix in spiral order.


// example:  if 2D array has 4 numbers in arr  [[1,2,3,4],[5,6,7,8],[9,10,11,12]]  so it means i can add for each number +4 
// so [1,2,3,4] + 4 = [5, 6, 7, 8] + 4 = [9, 10, 11, 12]
// i mean we could take only the first array from 2d array and add it to result and then add the numbers based on that array

function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];
    
    const result: number[] = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Move down to the next row
        
        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move left to the previous column
        
        if (top <= bottom) {
            // Traverse from right to left along the bottom row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Move up to the previous row
        }
        
        if (left <= right) {
            // Traverse from bottom to top along the left column
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move right to the next column
        }
    }
    
    return result;
}