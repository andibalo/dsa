// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/description/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/*
----------------------------------------------------------------

Solution: 
1. Create character pair map and loo-p through the input string
2. If length === 0, push to stack
3. If length > 0, get top item in stack and get its pair from the map in step 1. 
4. If the current character in interation === top item pair from step 3, remove top item from stack else push current character to stack.
5. If stack.length === 0 then input is valid else false

*/

var isValid = function(s) {
    let stack = []
 
     const characterPairMap = {
         "(": ")",
         "{": "}",
         "[": "]",
     }
 
     let strArr = s.split("")
 
     for(let i = 0 ; i < strArr.length;i++){
         if(stack.length > 0){
 
             const topItem = stack[stack.length - 1]
 
             if(characterPairMap[topItem] !== undefined && characterPairMap[topItem] === strArr[i]){
                 stack.pop()
             } else {
                 stack.push(strArr[i])
             }
 
             continue
         } 
         
         stack.push(strArr[i])
     }
 
     return stack.length === 0
 };

// var isValid = function(s) {

//     const parethesesMapper = {
//         ")": "(",
//         "}": "{",
//         "]": "["
//     }
    
    
//     const stack = []

//     for(let i = 0 ; i < s.length; i++){
        
//         if(stack.length > 0){
//             if(stack[stack.length - 1] === parethesesMapper[s[i]]){   
//                 stack.pop()
                
//                 continue
//             } 

//             stack.push(s[i])
            
//             continue
//         } 
        
//         stack.push(s[i])
//     }


//     if(stack.length > 0){
//         return false
//     }
    
//     return true
//  };


console.log("({})")