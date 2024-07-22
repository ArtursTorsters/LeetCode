// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
}


// chunking an array of objects into smaller arrays of a given size. The function iterates through the input array, 
// slicing it into smaller chunks of the specified size, and pushing these chunks into a new array.

