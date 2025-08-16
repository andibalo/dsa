// 287. Find the Duplicate Number https://leetcode.com/problems/find-the-duplicate-number/description/
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.



// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3


// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.


// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

// 1. This is a linked list problem
// Value of index A points to index of B. Value B points to index of C...
// 2. Use floyd algorithm to find the beginning of cycle
// beginning of cycle = the output
// 2.1 use fast and slot pointer to find intersection node
// 2.2 create another slow pointer and increment intersection node and second slow pointer by 1 until intersect
// the intersectino of node from 2.1 and second slow pointer from 2.2 is the answer
function findDuplicate(nums) {

  let slow = nums[0]
  let fast = nums[0]

  // PART 1
  // Find slow and fast pointer intersections
  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    if (slow === fast) {
      break
    }
  }

  // console.log(slow, fast, "SLOW FAST INTERSECTION / SFI")

  // PART 2
  // Create 2nd slow pointer and find intersection with SFI
  let secondSlow = nums[0]

  while (secondSlow !== slow) {
    secondSlow = nums[secondSlow]
    slow = nums[slow]
  }

  // console.log(secondSlow, "ANSWER")

  return secondSlow
}
findDuplicate([1,3,6,2,7,3,5,4])


// Driver code 
// function main() {
//   let nums = [
//     [1, 3, 2, 3, 5, 4],
//     [2, 4, 5, 4, 1, 3],
//     [1, 6, 3, 5, 1, 2, 7, 4],
//     [1, 2, 2, 4, 3],
//     [3, 1, 3, 5, 6, 4, 2]
//   ]
//   for (let i = 0; i < nums.length; i++) {
//     console.log(i + 1 + ".\tnums = ", nums[i]);
//     console.log("\tDuplicate number = ", findDuplicate(nums[i]));
//     console.log("-".repeat(100));
//   }
// }

// main()