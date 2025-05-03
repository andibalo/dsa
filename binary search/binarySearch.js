// 704. Binary Search
// https://leetcode.com/problems/binary-search/description/
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

// SOLUTION 1
/*
1. Create left, middle and right pointer.
2. Use a while loop using the condition left <= right for search, loop will break if right < left or left > right
3. Check if middle === target
4. If target > middle, we can move left pointer by setting left = middle + 1. Adding 1 is important to break out of loop (step 2)
5. If target < middle, we can move right pointer by setting right = middle - 1. Minus 1 is important to break out of loop (step 2)
6. Recalculate middle pointer, middle = left + (right - left / 2)

Note: Step 4-6 will handle if there is only three elements left. It will converge into one and be compared to the target value
*/

var binarySearch = function(nums, target) {
    let targetIndex = -1

    if(nums.length <= 2) {
        if(nums[0] === target) {
            targetIndex = 0
            return targetIndex
        }
 
        if(nums[1] === target) {
            targetIndex = 1
            return targetIndex
        }

        return targetIndex
    }

    let left = 0 
    let right = nums.length - 1

    let middle =  Math.floor((right - left) / 2) 

    while(left <= right){

        if(nums[middle] === target){
            targetIndex = middle
            break
        }

        if(target < nums[middle]){
            right = middle - 1
            middle = left + Math.floor((right - left) / 2) 
            continue
        }

        if(target > nums[middle]){
            left = middle + 1
            middle = left + Math.floor((right - left) / 2) 
            continue
        }
    }

    return targetIndex
};


binarySearch([1,2,3,4,5],-2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1