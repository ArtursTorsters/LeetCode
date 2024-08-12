// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000



function romanToInt(s: string): number {

    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const value = obj[char];

        if (value < prevValue) {
            total -= value;
        } else {
            total += value;
        }

        prevValue = value;
    }

    return total;
}



// Mapping Roman Numerals to Integers: The romanToIntMap object maps each Roman numeral character to its integer value.
// Iterating Over the String: The function iterates over the Roman numeral string from right to left.
// Accumulating the Total:

//     If the current numeral is less than the previous one, it subtracts its value (this handles cases like IV or IX).
//     Otherwise, it adds its value.

// Return the Total: After processing all characters, the function returns the total numeric value.