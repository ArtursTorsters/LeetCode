type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    
return await promise1 + await promise2

};

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers. 