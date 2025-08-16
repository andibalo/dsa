// Given an array, colors, which contains a combination of the following three elements:

// 0 (Representing red)

// 1 (Representing white)

// 2 (Representing blue)

// Sort the array in place so that the elements of the same color are adjacent, and the final order is: red (0), then white (1), and then blue (2).

// SOLUTION 1
// function sortColors(colors) {
//   let redCount = 0
//   let whiteCount = 0
//   let blueCount = 0

//   const resultArr = []

//   colors.forEach(color => {
//     if (color === 0) {
//       redCount++
//     }

//     if (color === 1) {
//       whiteCount++
//     }

//     if (color === 2) {
//       blueCount++
//     }
//   })

//   for(let i = 0; i < colors.length; i++) {
//     if(redCount > 0) {
//       resultArr.push(0)

//       redCount--
//       continue
//     }

//      if(whiteCount > 0) {
//       resultArr.push(1)

//       whiteCount--
//       continue
//     }

//      if(blueCount > 0) {
//       resultArr.push(2)

//       blueCount--
//       continue
//     }
//   }
// }

function sortColors(colors) {
  // Initialize the start, current, and end pointers
  let start = 0;
  let current = 0;
  let end = colors.length - 1;

  while (current <= end) {

    if (colors[current] === 0) {
      // If the current element is 0 (red), swap it with the element at the start pointer
      // This ensures the red element is placed at the beginning of the array
      let tmp = colors[start]
      colors[start] = colors[current]
      colors[current] = tmp

      // Move both the start and current pointers one position forward
      current++
      start++
      continue
    }

    if (colors[current] === 1) {
      current++
      continue
    }

    if (colors[current] === 2) {
      // If the current element is 2 (blue), swap it with the element at the end pointer
      // This pushes the blue element to the end of the array
      let tmp = colors[end]
      colors[end] = colors[current]
      colors[current] = tmp

      // Move the end pointer one position backward
      // The reasone we move end pointer but not current pointer as well like if current pointer = 0
      // is to ensure the if there is 0 at the end is not skipped by the current pointer
      // because when going from the left is already guaranteed to have no 0
      end--
    }
  }

  console.log(colors)

  return colors;
}

sortColors([0, 1, 1, 0, 2, 2, 0, 0])

// Driver code
// const inputs = [
//   [0, 1, 0],
//   [1, 1, 0, 2],
//   [2, 1, 1, 0, 0],
//   [2, 2, 2, 0, 1, 0],
//   [2, 1, 1, 0, 1, 0, 2],
//   [0, 1, 1, 0, 2, 2, 0, 0]
// ];

// for (let i = 0; i < inputs.length; i++) {

//   console.log(i + 1 + ".\tcolors:", arrayToString(inputs[i]),
//     "\n\n\tThe sorted array is:", arrayToString(sortColors(inputs[i])));

//   console.log("-".repeat(100));
// }
