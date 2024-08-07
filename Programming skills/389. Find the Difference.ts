// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.





// Consider the example where s = "abcd" and t = "abcde":

//     ASCII values:
//         a = 97
//         b = 98
//         c = 99
//         d = 100
//         e = 101

// Step-by-Step XOR Operation

//     Initialize result to 0.

//     XOR all characters in s:
//         result = 0 ^ 97 ^ 98 ^ 99 ^ 100

//     XOR all characters in t:
//         result = result ^ 97 ^ 98 ^ 99 ^ 100 ^ 101

// Notice that every character in s has a counterpart in t except for the added character. This is why they cancel each other out:

//     0 ^ 97 ^ 97 = 0
//     0 ^ 98 ^ 98 = 0
//     0 ^ 99 ^ 99 = 0
//     0 ^ 100 ^ 100 = 0

// After canceling out, you are left with:

//     0 ^ 101 = 101




function findTheDifference(s: string, t: string): string {

    let result = 0;

    // This loop converts each character in s to its ASCII value 
    for (let char of s) {
        result ^= char.charCodeAt(0);
    }

    //  This loop converts each character in t to its ASCII value 
    for (let char of t) {
        result ^= char.charCodeAt(0);
    }

    // The result is the ASCII code of the added character
    return String.fromCharCode(result);
}



