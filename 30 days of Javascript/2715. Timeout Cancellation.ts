// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise,
//  if cancelFn is not invoked within the specified delay t, 
// fn should be executed with the provided args as arguments.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    let timeoutId: NodeJS.Timeout;

    // Schedule the execution of fn after t milliseconds
    timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // Return the cancel function
    return function cancelFn() {
        clearTimeout(timeoutId);
    };
}



// Timeout Setup: We set up the timeout using setTimeout and pass in the function fn with its arguments args. This will schedule fn to be executed after t milliseconds.
// Cancel Function: We return a cancelFn function which, when called, will clear the timeout using clearTimeout. This prevents fn from being executed if cancelFn is invoked before the timeout period elapses.