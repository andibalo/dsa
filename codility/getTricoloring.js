// An array A consisting of N integers is given. A tricoloring of this array is a string consisting of N characters such that each character is either 'R' (meaning red), 'G' (green) or 'B' (blue). The K-th character of the string (where 0 ≤ K < N) denotes the color of K-th element of the array. A tricoloring is stable if the sum of red elements is equal to the sum of green elements and to the sum of blue elements. A tricoloring does not necessarily use all three colors. The sum of elements of a color that is not used is assumed to be 0.
// For example, consider array A such that
// A[0] = 3    A[1] = 7    A[2] = 2
// A[3] = 5    A[4] = 4
// The string "RRGGB" is an example tricoloring of this array. It is not stable, because A[0] + A[1] = 10, A[2] + A[3] = 7, A[4] = 4 and  10 ≠ 7 ≠ 4. On the other hand, tricoloring "RGBBR" is stable, because A[0] + A[4] = 7; A[1] = 7 and A[2] + A[3] = 7.
// Write a function
// function solution(A);
// that, given an array A consisting of N integers, returns any stable tricoloring of this array. The function should return the string "impossible" if no stable tricoloring exists.
// For example, given array A such that
// A[0] = 3    A[1] = 7    A[2] = 2
// A[3] = 5    A[4] = 4
// the function may return "RGBBR", as explained above. Given array A such that
// A[0] = 3    A[1] = 6    A[2] = 9
// the function should return "impossible".
// Write an efficient algorithm for the following assumptions:

// • N is an integer within the range [0..18];
// • each element of array A is an integer within the range [−100,000,000..100,000,000].

function tricoloringArray(A) {
    const N = A.length;

    // Helper function to check if a coloring is stable
    function isStable(tricoloring) {
        let sumR = 0, sumG = 0, sumB = 0;
        
        for (let i = 0; i < N; i++) {
            if (tricoloring[i] === 'R') sumR += A[i];
            else if (tricoloring[i] === 'G') sumG += A[i];
            else if (tricoloring[i] === 'B') sumB += A[i];
        }

        return sumR === sumG && sumG === sumB;
    }

    // Helper function to generate all colorings recursively
    function generateTricoloring(idx, current) {
        if (idx === N) {
            // Once we've assigned colors to all elements, check the coloring
            if (isStable(current)) {
                return current;
            }
            return null;
        }

        // Try all 3 colors for this position
        for (let color of ['R', 'G', 'B']) {
            const result = generateTricoloring(idx + 1, current + color);
            if (result !== null) {
                return result;
            }
        }

        return null;
    }

    // Start recursive search
    const result = generateTricoloring(0, '');

    // If no stable coloring was found
    if (result === null) {
        return "impossible";
    }
    return result;
}

// Test cases
console.log(solution([3, 7, 2, 5, 4]));  // Expected: "RGBBR" or any stable coloring
console.log(solution([3, 6, 9]));   