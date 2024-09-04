

function rotate(nums: number[], k: number): void {
   const len = nums.length
   //splice() is used to remove elements from the start of the array (index 0), and the number of elements to remove is determined by the effective rotation calculated.
    nums.push(...nums.splice(0, (-k % len + len) % len))
    console.log(nums)
  }




//   Let’s say you have the array [1, 2, 3, 4, 5] and you want to rotate it by k = 2 positions:

//     Calculate Rotation:
//         (-2 % 5 + 5) % 5 evaluates to 3 (2 positions from the end).

//     Perform Rotation:
//         nums.splice(0, 3) removes the first 3 elements, which are [1, 2, 3].
//         nums.push(...[1, 2, 3]) appends [1, 2, 3] to the end of the array.

//     Result:
//         The rotated array becomes [4, 5, 1, 2, 3].