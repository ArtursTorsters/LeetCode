//   Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.



type Fn = (...params: number[]) => number

// memoize(fn): This function takes a function fn as an argument and returns a new memoized version of that function.
function memoize(fn: Fn) {
    // Map is used to store cached results
    const cache = new Map();
    // It first creates a key by stringifying the arguments.
    // It checks if the cache already has this key.
    // If the key is found in the cache, it returns the cached result.
    // If the key is not found, it calls the original function fn with the provided arguments, stores the result in the cache, and then returns the result.
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  


