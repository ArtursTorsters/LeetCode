// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

//     When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

// promise rejects:

//     When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.



async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    if(functions.length === 0) {
      resolve([]);
      return;
    }

    const res: T[] = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach(async (el, idx) => {
      try {
        const subResult = await el();
        res[idx] = subResult;
        resolvedCount++;
        if(resolvedCount === functions.length) {
          resolve(res);
        }
      } catch(err) {
        reject(err);
      }
    });
  });
};


