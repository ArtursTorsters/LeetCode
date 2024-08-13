// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.



/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let obj = {
        R:0,
        L:0,
        U:0,
        D:0
    }

    // The for...in loop iterates over the indices of the string, so moves[i] accesses each character. 
    // For each character, the corresponding property in obj is incremented by 1. 
    // This keeps track of how many times each move ('R', 'L', 'U', 'D') appears in the string.
    for (var i in moves) {
        obj[moves[i]] += 1
    }
    // To determine if the robot returns to the starting position, the solution checks:

    // If the number of right moves ('R') is equal to the number of left moves ('L').
    // If the number of up moves ('U') is equal to the number of down moves ('D').
    // The function returns true if both conditions are true, and false otherwise.
    return (obj['R'] == obj['L'] && obj['U'] === obj['D'])
    };