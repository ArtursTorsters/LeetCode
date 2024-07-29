// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.



type SimpleArray = number | SimpleArray[];
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    
    function flattenArray(array: MultiDimensionalArray, depth: number): MultiDimensionalArray {
        // Use reduce to accumulate the flattened result
        return array.reduce<MultiDimensionalArray>((acc, item) => {
            if (Array.isArray(item) && depth > 0) {
                // If the item is an array and we still have depth to process,
                // recursively flatten the sub-array
                acc.push(...flattenArray(item, depth - 1));
            } else {
                // Otherwise, just push the item to the accumulator
                acc.push(item);
            }
            return acc;
        }, []);
    }

    // Start the flattening process with the provided array and depth
    return flattenArray(arr, n);
};