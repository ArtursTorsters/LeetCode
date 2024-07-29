// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

function mergeAlternately(word1: string, word2: string): string {
    let result = '';

    // Determine the maximum length of the two strings
    const maxLength = Math.max(word1.length, word2.length);

    // Iterate over the characters of both strings up to the maximum length
    for (let i = 0; i < maxLength; i++) {
        // If the current index is within the bounds of word1, add the character to result
        if (i < word1.length) {
            result += word1[i];
        }
        // If the current index is within the bounds of word2, add the character to result
        if (i < word2.length) {
            result += word2[i];
        }
    }

    return result;
}
