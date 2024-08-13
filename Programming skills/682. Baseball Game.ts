// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

//     An integer x.
//         Record a new score of x.
//     '+'.
//         Record a new score that is the sum of the previous two scores.
//     'D'.
//         Record a new score that is the double of the previous score.
//     'C'.
//         Invalidate the previous score, removing it from the record.

// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

function calPoints(operations: string[]): number {

    const scores = [];

    for (let operation of operations) {
        if (operation === '+') {
            // Record a new score that is the sum of the previous two scores
            if (scores.length >= 2) {
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
            }
        } else if (operation === 'D') {
            // Record a new score that is double the previous score
            if (scores.length > 0) {
                scores.push(scores[scores.length - 1] * 2);
            }
        } else if (operation === 'C') {
            // Invalidate the previous score
            if (scores.length > 0) {
                scores.pop();
            }
        } else {
            // Operation is an integer x
            scores.push(parseInt(operation));
        }
    }

    // Return the sum of all scores
    return scores.reduce((total, score) => total + score, 0);
}


// For the given operations list ["5", "2", "C", "D", "+"]:

//     "5" adds 5 to the list: [5]
//     "2" adds 2 to the list: [5, 2]
//     "C" removes the last score (which is 2): [5]
//     "D" doubles the last score (which is 5): [5, 10]
//     "+" adds a new score which is the sum of the last two scores (5 + 10): [5, 10, 15]