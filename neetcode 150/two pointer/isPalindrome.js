// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

function toAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  }
  
  var isPalindrome = function(s) {
      
      let isPalindrome = true
      let transformedString = toAlphanumeric(s)
  
      if(transformedString === "") {
          return isPalindrome
      }
  
      const stringArr = transformedString.toLowerCase().split("");
  
      let left = 0
      let right = stringArr.length - 1
     
  
      if(stringArr.length === 2){
          return stringArr[left] === stringArr[right]
      }
  
      while(left < right){
          if(stringArr[left] !== stringArr[right]) {
              isPalindrome = false
              break
          }
  
          left++
          right--
      }
  
      return isPalindrome
  };