function numberToWords(number: number): string {
    if (number === 0) return "Zero";

    const obj: { [key: number]: string } = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
        100: "Hundred",
        1000: "Thousand",
        1000000: "Million",
        1000000000: "Billion"
    };

    // Helper function to convert numbers less than 1000 to words
    function convertNumberToWords(n: number): string {
        // Handle numbers less than 20 directly using the obj mapping
        if (n < 20) return obj[n] || '';
        
        // Handle numbers between 20 and 99
        if (n < 100) {
            // For tens place
            return obj[Math.floor(n / 10) * 10] + (n % 10 ? ' ' + obj[n % 10] : '');
        }
        
        // Handle numbers between 100 and 999
        if (n < 1000) {
            // Recursively handle hundreds and the remainder
            return convertNumberToWords(Math.floor(n / 100)) + ' Hundred' + (n % 100 ? ' ' + convertNumberToWords(n % 100) : '');
        }
        
        // Handle numbers between 1000 and 999,999
        if (n < 1000000) {
            // Recursively handle thousands and the remainder
            return convertNumberToWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + convertNumberToWords(n % 1000) : '');
        }

        if (n < 1000000000) {
          
            return convertNumberToWords(Math.floor(n / 1000000)) + ' Million' + (n % 1000000 ? ' ' + convertNumberToWords(n % 1000000) : '');
        }
        
        return convertNumberToWords(Math.floor(n / 1000000000)) + ' Billion' + (n % 1000000000 ? ' ' + convertNumberToWords(n % 1000000000) : '');
    }

    return convertNumberToWords(number).trim();
}


