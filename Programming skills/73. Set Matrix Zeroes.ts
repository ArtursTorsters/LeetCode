// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.




function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // Arrays to store which rows and columns should be zero
    let rowZero = new Array(rows).fill(false);
    let colZero = new Array(cols).fill(false);

    // First pass: identify which rows and columns need to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                rowZero[i] = true;
                colZero[j] = true;
            }
        }
    }

    // Second pass: set rows and columns to zero based on the flags
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (rowZero[i] || colZero[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}