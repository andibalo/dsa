class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.values = []
    }

    find(val) {
        if (this.root === null) {

            return false
        }

        let current = this.root

        while (true) {

            if (val === current.value) {
                return true
            }

            if (val > current.value) {
                if (current.right === null){
                    return false
                }

                current = current.right
            } else {
                if (current.left === null){
                    return false
                }

                current = current.left
            }
        }
    }

    insert(val) {
        if (this.root === null) {
            this.root = new Node(val)
            return this
        }

        let newNode = new Node(val)

        let current = this.root

        while (true) {
            if (val === current.value) {
                return undefined
            }

            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }

                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }

                current = current.right

            }
        }

    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS(){
        let node = this.root

        let queue = []
        let data = []

        queue.push(node)

        while(queue.length){
            node = queue.shift()

            data.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }

        return data
    }

    DFSPreOrder(){
        this.values = []

        let current = this.root

        this.traversePreOrder(current)

        return this.values
    }

    traversePreOrder(node){
        this.values.push(node.value)
        
        if (node.left) {
            this.traversePreOrder(node.left)
        }

        if (node.right) {
            this.traversePreOrder(node.right)
        }

        return
    }

    DFSPostOrder(){
        this.values = []

        let current = this.root

        this.traversePostOrder(current)

        return this.values
    }

    traversePostOrder(node){
  
        if (node.left) {
            this.traversePostOrder(node.left)
        }

        if (node.right) {
            this.traversePostOrder(node.right)
        }

        this.values.push(node.value)
        

        return
    }

    DFSInOrder(){
        this.values = []

        let current = this.root

        this.traverseInOrder(current)

        return this.values
    }

    traverseInOrder(node){
  
        if (node.left) {
            this.traverseInOrder(node.left)
        }

        this.values.push(node.value)

        if (node.right) {
            this.traverseInOrder(node.right)
        }
        

        return
    }
}

let bst = new BinarySearchTree()



//      10 
//    6    15
//  3   8     20

bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)

// console.log(bst.find(1))

console.log(bst.DFSPreOrder())
console.log(bst.DFSPostOrder())
console.log(bst.DFSInOrder())