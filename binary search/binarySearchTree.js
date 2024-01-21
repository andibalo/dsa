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
}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(4)
bst.insert(13)
bst.insert(16)

console.log(bst.find(1))
