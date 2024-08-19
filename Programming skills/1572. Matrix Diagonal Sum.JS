// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.


var diagonalSum = function(mat) {
    let output = 0;
    let length = mat.length;
    
    for (let i = 0; i < length; i++) {
        console.log(mat[i][i])
        output += mat[i][i] + mat[i][length - 1 - i]
    }
    
    if (length % 2 === 1) {
        let num = Math.floor(length / 2);
        output -= mat[num][num]
    }
    return output;
};