//Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

function repeatedSubstringPattern(s: string): boolean {
    
    let words = s.length;
  
    //We iterate from 1 to n/2 to check all possible lengths of the substring that could repeat to form the original string.
      for (let i = 1; i <= words / 2; i++) {
        //Check if the current length i is a divisor of n:
          if (words % i === 0) { // Check if i is a divisor of n
              let repeatedSubstring = s.slice(0, i).repeat(words / i);
              if (repeatedSubstring === s) {
                  return true;
              }
          }
      }
  
      return false;
  }
  
  