// You are given a string word containing lowercase English letters.
// Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ["a","b","c"], we need to push the key one time to type "a", two times to type "b", and three times to type "c" .
// It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.



// Return the minimum number of pushes needed to type word after remapping the keys.


function minimumPushes(word: string): number {
    // how many times each letter apepars
    const frequency: { [key: string]: number } = {};
    for (const char of word) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    console.log("freq", frequency)
    const freqArray = Object.values(frequency).sort((a, b) => b - a);
    

    let totalPresses = 0;
    const numKeys = 8; // We have keys 2 to 9
    let presses = 1; // Start with 1 press

    for (let i = 0; i < freqArray.length; i++) {
        if (i % numKeys === 0 && i > 0) {
            presses++; // Increment press count after every batch of 8 letters
        }
        totalPresses += freqArray[i] * presses;
    }
    
    return totalPresses;
}



// Frequency Count: Create a frequency map of how many times each letter appears.
// Sorting: Convert the frequency map to an array and sort it so that the most frequent letters are first.
// Press Calculation: Iterate through the sorted frequencies and compute the total number of presses needed. The presses variable keeps track of the current number of presses required for letters. After every 8 letters, we increase the press level.