// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.


interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    let returnedObj = {}
  
    for (const item of this) {
        // Get the key for the current item
        const key = fn(item);
        
        // Initialize the array for this key if it doesn't already exist
        if (!returnedObj[key]) {
            returnedObj[key] = [];
        }

        // Push the current item into the correct array
        returnedObj[key].push(item);
    }
 return returnedObj
}


// The groupBy method groups the elements of an array into an object where each key is determined by a callback function, and each value is an array containing the elements that correspond to that key. Here's a concise summary:
// How groupBy Works

//     Callback Function: The callback function is applied to each item in the array to determine the key under which that item will be grouped.

//     Result Object: The result is an object where:
//         Each key is the result of the callback function.
//         Each value is an array containing all items from the original array that have the same key.


const arr = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'orange' },
    { type: 'vegetable', name: 'broccoli' }
];

// Group by 'type'
const grouped = arr.groupBy(item => item.type);

console.log(grouped);
// Output:
// {
//   fruit: [
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'banana' },
//     { type: 'fruit', name: 'orange' }
//   ],
//   vegetable: [
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'vegetable', name: 'broccoli' }
//   ]
// }
