// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

//     If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
//     If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".


/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // Promise that resolves with the function's result
        const fnPromise = new Promise(resolve => resolve(fn(...args)));
        
        // Promise that rejects after the timeout
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject('Time Limit Exceeded'), t)
        );
        
        //  race both of promises
        return Promise.race([fnPromise, timeoutPromise]);
    };
};



// Tip : Try to resolve promises individually and then return the fastest promise resolved with the help of "Pomise.race"