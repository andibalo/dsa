// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {


    const numToIndex = new Map(); // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the Map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        // Store the current number and its index in the Map
        numToIndex.set(nums[i], i);
    }

    throw new Error("No solution found");
};



var twoSum2 = function (nums, target) {
    const numToIndexMap = {}
    let answer = []

    nums.forEach((num, i) => {
        
        const complement = target - nums[i]

        if(numToIndexMap[complement] || numToIndexMap[complement] === 0) {
            answer.push(numToIndexMap[complement])
            answer.push(i)
            return
        }

        numToIndexMap[nums[i]] = i
    });

    return answer
};


console.log(twoSum2([2, 7, 11, 15], 9))

console.log(twoSum2([3, 2 , 5, 1], 7))
console.log(twoSum2([1, 2, 4, 6, 8, 9], 12)) 
console.log(twoSum2([3,3], 6))