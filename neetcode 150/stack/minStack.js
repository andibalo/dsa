// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.



// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.



// SOLUTION 1 (USING TWO STACKS)

/** 
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Summary : maintain two stack, one that holds the real values (real stack) and one more that holds min values (min value stack) corresponding to the value in the real stack

// class MinStack {
//     /**
//      * @constructor
//      */
//     constructor () {
//         this.stack = [];
//         this.minStack = [];
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     push (val, { minStack } = this) {
//         this.stack.push(val);             /* Space O(N) */

//         const isMinEmpty = !minStack.length;
//         const hasNewMin = val <= this.top(minStack);
//         const canAddMin = isMinEmpty || hasNewMin;
//         if (canAddMin) minStack.push(val);/* Space O(N) */
//     }

//     /**
//      * @return {void}
//      */
//     pop ({ stack, minStack } = this) {
//         const top = stack.pop();          /* Time O(1) */

//         const canPopMin = top === this.getMin();
//         if (canPopMin) minStack.pop();    /* Time O(1) */
//     }

//     /**
//      * @param {Array}
//      * @return {number}
//      */
//     top (stack = this.stack) {
//         return stack.length
//             ? stack[stack.length - 1]     /* Time O(1) */
//             : null;
//     }

//     /**
//      * @return {number}
//      */
//     getMin (minStack = this.minStack) {
//         return this.top(minStack);       /* Time O(1) */
//     }
// }



// SOLUTION 2 (USING LINKED LIST)

/** 
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(1)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Summary : each node holds additional property for min value

class Node {
    constructor(val, minVal, next) {
        this.val = val
        this.min = minVal
        this.next = next
    }
}

class MinStack {
    constructor() {
        this.head = null
    }


    push(val) {
        if (!this.head) {
            this.head = new Node(val, val, null)
            return
        }


        this.head = new Node(val, Math.min(this.head.val, val), this.head)
    }

    top() {
        return this.head.val
    }

    pop() {
        this.head = this.head.next
    }

    getMin(){
        return this.head.min
    }
}   

minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
