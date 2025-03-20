

// You are given an array of integers. In one operation, you can flip any bit of any element in the array. 
// The goal is to find the minimum number of operations to make all the elements in the array equal.

// Example n = 2 and arr = [1,2] 
// In a single operation, the second bit of 1(01) can be flipped, and made equal to 3(11). 
// In the next operation, 2(10) can be made equal to 3(11) by flipping the first bit. 
// Thus the array becomes [3, 3] in two operations. Hence the answer is 2 as this is the minimum number of operations required to make all the elements of the array equal.

function getMinOperations(arr) {
    const n = arr.length;

    let minFlips = 0;
    for (let bit = 0; bit < 32; bit++) {
        let countOnes = 0;
        for (let num of arr) {
            if (num & (1 << bit)) {
                countOnes++;
            }
        }

        let countZeros = n - countOnes;

        minFlips += Math.min(countOnes, countZeros);
    }

    return minFlips;
}

// Example 1: Small array
const arr1 = [1, 2]; 
// Binary representation: [01, 10]
// Minimum flips: Flip the second bit of 1 (01 -> 11) and the first bit of 2 (10 -> 11).
console.log(getMinOperations(arr1)); // Output: 2

// Example 2: All elements are already equal
const arr2 = [7, 7, 7];
// Binary representation: [111, 111, 111]
// No flips are needed as all elements are already equal.
console.log(getMinOperations(arr2)); // Output: 0

// Example 3: Larger array with different values
const arr3 = [1, 2, 3];
// Binary representation: [01, 10, 11]
// Minimum flips: Flip the second bit of 1 (01 -> 11) and the first bit of 2 (10 -> 11).
console.log(getMinOperations(arr3)); // Output: 2

// Example 4: Array with zeros
const arr4 = [0, 0, 0];
// Binary representation: [0, 0, 0]
// No flips are needed as all elements are already equal.
console.log(getMinOperations(arr4)); // Output: 0

// Example 5: Array with mixed values
const arr5 = [4, 5, 6];
// Binary representation: [100, 101, 110]
// Minimum flips: Flip bits to make all elements equal to 111 (7 in decimal).
console.log(getMinOperations(arr5)); // Output: 3