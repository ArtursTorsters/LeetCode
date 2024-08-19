// There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

//     Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
//     Paste: You can paste the characters which are copied last time.

// Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.



// so the issue is actually simple math , just need to take the letter and multiply by how many letters needed (n)
// then add +1 since the first step is always to copy the A letter

// A * letters = 3 
// A * 4 = c p p p p 



function minSteps(n: number): number {
    let steps = 0;  // Initialize a counter for the total number of operations needed
    let factor = 2; // Start with the smallest prime factor, 2

    // Continue the process until n is reduced to 1
    while (n > 1) {
        // While n is divisible by the current factor
        while (n % factor === 0) {
            steps += factor; // Add the factor to the steps count
            n /= factor;     // Divide n by the factor to reduce it
        }
        factor++; // Move to the next potential factor
    }

    // Return the total number of operations needed to achieve exactly n 'A's
    return steps;
}



// Understanding the Process

//     n: The Target Number of 'A's:
//         n is the total number of 'A's you want to have on the screen.

//     Factor: The Smallest Divisor:
//         A factor is a number that divides n evenly (without leaving a remainder).
//         For example, if n = 12, some factors of 12 are 2, 3, 4, and 6 (since 12 ÷ 2 = 6, 12 ÷ 3 = 4, etc.).

//     Process in the Function:
//         Start with the Smallest Factor (2):
//             The function begins by checking the smallest factor, which is 2 (because 1 is trivial and would not help in reducing n).
//             If n is divisible by 2 (i.e., n % 2 === 0), 2 is added to the steps, and n is divided by 2.
//         Continue Finding Factors:
//             After fully dividing n by 2, the function increments to the next possible factor (3, then 4, etc.).
//             The process continues, adding the factor to steps each time it divides n.

//     Why Use Factors?:
//         The idea is to minimize the number of operations by using the smallest factors first.
//         For each factor, the function adds that factor to the steps count, simulating the "Copy All" followed by "Paste" operations.
//         For instance, if n = 18, using factors 2 and 3 efficiently simulates multiplying 'A's through copying and pasting.



// Example

// Let's walk through an example with n = 12:

//     Step 1: Start with factor = 2.
//         12 % 2 === 0, so add 2 to steps and divide 12 by 2.
//         Now n = 6 and steps = 2.

//     Step 2: Check factor = 2 again.
//         6 % 2 === 0, so add 2 to steps and divide 6 by 2.
//         Now n = 3 and steps = 4.

//     Step 3: Increment factor to 3.
//         3 % 3 === 0, so add 3 to steps and divide 3 by 3.
//         Now n = 1 and steps = 7.

//     Result: When n = 1, the loop stops, and the function returns 7 as the minimum number of steps needed.