/*
11. Container With Most Water
https://leetcode.com/problems/container-with-most-water/description/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

----------------------------------------------------------------

Solution:
1. Use two pointers (left & right), and loop while left < right
2. If height[left] < height[right], move left pointer and h = height[left] else move right pointer and h = height[right]
3. On each iteration count the area (h = from step 2 * l = right - left) and update the maxOutput accordingly

*/

var maxArea = function(height) {
    
    let left = 0
    let right = height.length - 1
    let maxOutput = 0

    while(left < right) {
        
        let h = height[right]
        let l = right - left

        if(height[left] < height[right]) {
            h = height[left]

            let area = h * l

            if(area > maxOutput) {
                maxOutput = area
            }

            left++

            continue
        }

        let area = h * l

        if(area > maxOutput) {
            maxOutput = area
        }

        right--
    }

    return maxOutput
};