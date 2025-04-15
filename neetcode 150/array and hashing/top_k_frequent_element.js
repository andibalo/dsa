// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// https://leetcode.com/problems/top-k-frequent-elements/

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// ----------------------------------------------------------------

// SOLUTION 1: HashMap + 2D Array for grouping (like buckets) 

// TIME COMPLEXITY = O(n + m + k) where n is num, m is numToFreqMap, k is top k elements because looping of valToFreqIndexArray stops at k
// SPACE COMPLEXITY = O(n)
// technically O(n + m + k), But since m ≤ n && k ≤ n, this simplifies to: O(n)
// m = numToFreqMap , n = valToFreqIndexArray , k = topKFrquentArray 
var topKFrequent = function(nums, k) {
    const numToFreqMap = {}

    // map number -> frequency
    nums.forEach(num => {
        if(numToFreqMap[num] !== undefined) {
            numToFreqMap[num] += 1
        } else {
            numToFreqMap[num] = 1
        }
    })

    let maxFreq = 0

    // find max frequency to determine array size
    for(let key in numToFreqMap) {
        if(numToFreqMap[key] > maxFreq) {
            maxFreq = numToFreqMap[key]
        }
    }

    // create array to group numbers based on frequency (buckets sort-esque)
    // array index = frequency
    // fill with [] because possibility of a number to have same frequency, [] = bucket

    // fill([]) creates multiple reference to the same array
    // const valToFreqIndexArray = new Array(maxFreq + 1).fill([])

    const valToFreqIndexArray = Array.from({length: maxFreq + 1}, () => []);

    // insert number to correct index based on frequency
    for(let key in numToFreqMap) {
        valToFreqIndexArray[numToFreqMap[key]] = [parseInt(key), ...valToFreqIndexArray[numToFreqMap[key]] ]
    }

    const topKFrquentArray = []
    let count = 0

    // loop backwards from high to low frequency
    for(let i = valToFreqIndexArray.length - 1; i >= 0; i-- ){
        for(let j = 0; j < valToFreqIndexArray[i].length; j++) {
            if(count === k){
                break;
            }

            topKFrquentArray.push(valToFreqIndexArray[i][j])
            count++
        }
    }

    return topKFrquentArray
};


// var topKFrequent = function(nums, k) {
//     const freqMap = new Map();
//     const bucket = [];
//     const result = [];

//     for(let num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }

//     console.log(freqMap)

//     for(let [num, freq] of freqMap) {
//         bucket[freq] = (bucket[freq] || new Set()).add(num);
//     }

//     console.log(bucket)

//     for(let i = bucket.length-1; i >= 0; i--) {
//         if(bucket[i]) result.push(...bucket[i]);
//         if(result.length === k) break;
//     }
//     return result;
// };

var topKFrequent = function (nums, k) {

    // create a map-like array based on num size
    let freqToNumberArrMap = Array.from(Array(nums.length + 1).keys())

    let numToFrequencyMap = {}


    for (let index = 0; index < nums.length; index++) {
        if (numToFrequencyMap[nums[index]]) {
            numToFrequencyMap[nums[index]] += 1
        } else {
            numToFrequencyMap[nums[index]] = 1
        }

    }

    // map index in freqToNumberArrMap as frequency to number in nums
    for (const [num, freq] of Object.entries(numToFrequencyMap)) {

        if (!Array.isArray(freqToNumberArrMap[freq])) {
            freqToNumberArrMap[freq] = [num]
        } else {
            freqToNumberArrMap[freq].push(num)
        }
    }


    // ex. if input [1, 1, 1, 2, 2, 3]
    // [ 0, [ 3 ], [ 2 ], [ 1 ], 4, 5, 6 ]

    // loop from right to left to get top k elements
    let topk = []
    for (let index = freqToNumberArrMap.length - 1; index >= 0; index--) {

        if (Array.isArray(freqToNumberArrMap[index])) {
            topk = topk.concat(freqToNumberArrMap[index])

        }

        if (topk.length === k) {
            break
        }
    }

    console.log(topk)
};

// topKFrequent([1, 1, 1, 2, 2, 3], 2)
topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)

