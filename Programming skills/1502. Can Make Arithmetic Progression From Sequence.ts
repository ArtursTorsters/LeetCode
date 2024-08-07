// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.


function canMakeArithmeticProgression(arr: number[]): boolean {
    
    arr.sort((a, b) => a - b);

    // Calculate the differences
    let differences = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let difference = arr[i + 1] - arr[i];
        differences.push(difference);
    }

    // Check if all differences are the same
    if (differences.length === 0) {
        return true; // An array with less than 2 elements is trivially an AP
    }

    const firstDifference = differences[0];
    for (let i = 1; i < differences.length; i++) {
        if (differences[i] !== firstDifference) {
            return false;
        }
    }

    return true;
}