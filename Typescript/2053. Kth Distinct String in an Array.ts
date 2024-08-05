// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".


function kthDistinct(arr: string[], k: number): string {
  arr.forEach(element => {
    console.log(element)
  });
};