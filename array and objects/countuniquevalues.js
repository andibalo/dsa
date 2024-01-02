// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

// ------------------------------------

// SOLUTION 1
// function countUniqueValues(intArr){
//     // add whatever parameters you deem necessary - good luck!

//     let uniqueCount = 0

//     if (intArr.length < 1) {
//         console.log(uniqueCount)
//         return
//     }

//     let uniqueMap = {}


//     intArr.forEach(element => {
//         if(!uniqueMap[element]) {
//             uniqueCount += 1
//             uniqueMap[element] = 1
//         } 
//     });

//     console.log(uniqueCount)
// }

function countUniqueValues(intArr){
    // add whatever parameters you deem necessary - good luck!
    let left = 0 
  
    for (let right = 1; right <= intArr.length; right++) {
      
        if(intArr[left] != intArr[right]){ 
            left += 1
            intArr[left] = intArr[right]
        }
    }


    console.log(left)
}


countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4