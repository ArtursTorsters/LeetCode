// Given a function fn and a time in milliseconds t, return a debounced version of that function.
// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again 
// within that window of time. The debounced function should also receive the passed parameters.


// type F = (...args: number[]) => void




// function debounce(fn: F, t: number): F {
//     let timer;
//     return function(...args) {
//         clearTimeout(timer);
//         setTimeout(() => {
//             fn(...args); // Call the original function with the provided arguments

//         },t)
//     }
// };

// Debouncing ensures that within a specified timeframe, the function executes only once, even if it's called multiple times during that period.



/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    var debounceTime;
    return function(...args) {
        clearTimeout(debounceTime);
        debounceTime = setTimeout(() => {
            fn(...args)
        }, t);
    }
};

