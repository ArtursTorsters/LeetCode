// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.


function diagonalSum(mat: number[][]): number {
    let result: number[] = [];
    let pushNext = true;

    mat.forEach(subnumber => {
        subnumber.forEach(number => {
            if (pushNext) {
                result.push(number);
            }
            // f it was true, it becomes false, and vice versa. so it pushes 1,3,5,7 etc
            pushNext = !pushNext;
        });
    });

    let sum = result.reduce((acc, curr) => acc + curr, 0);
    return sum;
}



