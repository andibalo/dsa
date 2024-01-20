// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// SUMMARY
// get the product of prefix and postfix of nums[i]

var productExceptSelf = function(nums) {

    const result = [];
    let prefix = 1;
    let postfix = 1;
    
    // create a prefix output array for each position in nums
    // ex. for input [1,2,3,4] , prefix array should be [1, 1, 2, 6]
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    console.log(result)

        
    // multiply the postfix to prefix of each element
    // start at second last index because last index is always prefix * 1
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }
    
    console.log(result)

    return result;
};


productExceptSelf([1,2,3,4])