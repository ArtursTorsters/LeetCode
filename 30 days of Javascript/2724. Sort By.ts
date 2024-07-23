// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.



type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
 
// return arr.sort((a:number, b:number) => a - b);
    return arr.sort((a, b) => fn(a) - fn(b));

};

// The comparator function (a, b) => fn(a) - fn(b) is used to compare the elements based on the values returned by the fn function.
// Examples:

//     Example 1: Sorts the array of numbers directly since fn returns the numbers themselves.
//     Example 2: Sorts an array of objects based on the x property.
//     Example 3: Sorts an array of arrays based on the second element of each sub-array.