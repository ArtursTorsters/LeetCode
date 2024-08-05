// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".



function kthDistinct(arr: string[], k: number): string {
  // Step 1: Count the occurrences of each item
  const counts = new Map<string, number>();
  arr.forEach(item => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  // Step 2: Use a Set to store unique items (those that appear exactly once)
  const uniqueSet = new Set<string>();
  arr.forEach(item => {
    if (counts.get(item) === 1) {
      uniqueSet.add(item);
    }
  });

  // Convert Set to array and get the k-th distinct item
  const uniqueArray = Array.from(uniqueSet);

  // Return the k-th distinct item if it exists, or an empty string otherwise
  return uniqueArray[k - 1] || "";
}