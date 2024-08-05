// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

class Calculator {
    private value: number;
    private result: number;

    constructor(value: number) {
        this.value = value;
        this.result = value;
    }

    add(value: number): Calculator {
        this.result += value;
        return this;
    }
    
    subtract(value: number): Calculator {
        this.result -= value;
        return this;
    }
    
    multiply(value: number): Calculator {
        this.result *= value;
        return this;
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    power(value: number): Calculator {
        this.result **= value; // Correctly use exponentiation
        return this;
    }
    
    getResult(): number {
        return this.result; // Return the actual result
    }
}