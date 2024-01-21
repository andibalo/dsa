// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105


// TIP
// a + b + c = 0
// when moving through the array if there is duplicate a skip to avoid duplicates
// same with b and c

var threeSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });

    console.log(nums)
    let arr = []


    for (let index = 0; index < nums.length; index++) {

        const a = nums[index];

        // if current num same as prev num skip to avoid duplicates
        if (index > 0 && a === nums[index - 1]) continue;

        let left = index + 1
        let right = nums.length - 1

        while (left < right) {

            if (nums[index] + nums[left] + nums[right] > 0) {
                right--
                continue
            }

            if (nums[index] + nums[left] + nums[right] < 0) {
                left++
                continue
            }

            if (nums[index] + nums[left] + nums[right] === 0) {

                arr.push([a, nums[left], nums[right]]);

                //after finding a match continue to calculate other possible combinations
                left++;
                right--;

                // skip if current left === prev left to avoid duplicate
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }

                // skip if current right === prev right to avoid duplicate
                while (nums[right] === nums[right + 11] && left < right) {
                    right--;
                }
            }
        }



    }

    console.log(arr)
};

// threeSum([-1, 0, 1, 2, -1, -4])
// threeSum([-2,0,1,1,2])
// threeSum([0, 0, 0, 0])
threeSum([-2, -2, 0, 0,2, 2])
