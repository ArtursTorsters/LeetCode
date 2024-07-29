// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

//     When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
//     When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

class ArrayWrapper {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(nums: any): number {
    // if (!this.nums[0] && !this.nums[1]) {
    //   return 0;
    // } else {
    //     return this.nums[0] + this.nums[1];

    // }
    return this.nums.reduce((acc,num)=> acc+num , 0)
    
  }

  toString(): string {
    return "[" + this.nums.toString() + "]";
  }
}
