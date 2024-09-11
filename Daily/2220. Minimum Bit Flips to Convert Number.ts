// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

//     For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.

// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.






// This expression calculates the number of differing bits between two numbers, start and goal, when represented in binary.


function minBitFlips(start: number, goal: number): number {

    // convert both nums to binary and compare ^ 
    // XOR returns 1 if the bits differ, and 0 if the bits are the same.
    return (start ^ goal).toString(2).split('1').length-1;

};


// This code calculates the number of differing bits (Hamming distance) between start and goal by XORing them, 
// converting the result to a binary string, and counting the number of 1s, which represent the differing bits.