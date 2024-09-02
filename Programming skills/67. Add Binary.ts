// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a: string, b: string): string {
    

    let convertA = BigInt('0b' + a);
    let convertB = BigInt('0b' + b);
    let result =  convertA + convertB
    
    
    
    
    return result.toString(2)
    
    
    
    };


