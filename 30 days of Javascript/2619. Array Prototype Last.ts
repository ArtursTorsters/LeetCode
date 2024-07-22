// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
// If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.



// in prototype , we can use ' this ' to refer to the array

interface Array<T> {
    last(): T | -1;
}

// You can access the properties and elements of the array instance using ' this ' 
//In the context of the method added to Array.prototype, ' this ' represents the specific array instance on which the method is called
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

