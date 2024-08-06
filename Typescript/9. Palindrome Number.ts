// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.


function isPalindrome(x: number): boolean {
 
    let test = x.toString()
            .split('')
            .reverse()
            .join('')
    console.log(test)
    // back to num from strung
    let num = parseFloat(test)
    
    if (num === x ) {
        return true
    }
    
    return false
    };
