// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


function isAnagram(s: string, t: string): boolean {

    // split the string in to ascending order - join them and then compare both strings
    return s.split('').sort().join('') === t.split('').sort().join('')

}