// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.


function average(salary: number[]): number {
    // Find the minimum and maximum values in the array
    const minSalary = Math.min(...salary);
    const maxSalary = Math.max(...salary);
    
    // Filter out the minimum and maximum values and sum the remaining values
    const sum = salary
        .filter(s => s !== minSalary && s !== maxSalary)
        .reduce((a, c) => a + c, 0);
    
    const avg = sum / (salary.length - 2);

    return avg;
}