

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

        if (this.length <= 0) {
            this.head = new Node(val)
            this.tail = this.head
            this.length++
            return this
        }

        let newNode = new Node(val)

        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    pop() {
        if (this.length <= 0) {

            return this
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this
        }

        let poppedNode = this.tail
        this.tail = poppedNode.prev
        this.tail.next = null
        poppedNode.prev = null

        this.length--
        return this
    }

    shift(val) {
        if (this.length <= 0) {

            this.head = new Node(val)
            this.tail = this.head
            this.length++
            return this
        }


        let newNode = new Node(val)

        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode

        this.length++
        return this
    }

    unshift() {
        if (this.length <= 0) {

            return this
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this
        }

        let currentHead = this.head
        this.head = currentHead.next
        this.head.prev = null
        currentHead.next = null

        this.length--
        return this
    }

    get(index) {

        if (index < 0 || index >= this.length) {
            return null
        }

        if (index >= Math.floor((this.length - 1) / 2)) {
            // start loop from end

            let currentTail = this.tail
            let counter = this.length - 1


            while (counter != index) {
                currentTail = currentTail.prev

                counter--
            }

            return currentTail
        } else {

            let currentHead = this.head
            let counter = 0


            while (counter != index) {
                currentHead = currentHead.next

                counter++
            }

            return currentHead
        }
    }

    set(index, val) {

        let node = this.get(index, val)

        if (node != null) {
            node.val = val
        }
    }

    insert(index, val) {


        if (index < 0 || index > this.length) {
            return false
        }

        if (index === 0) {
            this.shift(val)
            return
        }

        if (index === this.length) {
            this.push(val)
            return
        }

        let prevNode = this.get(index - 1)
        let newNode = new Node(val)

        let afterNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = afterNode
        afterNode.prev = newNode

        this.length++


        return this
    }

    
    remove(index) {


        if (index < 0 || index >= this.length) {
            return false
        }

        if (index === 0) {
            this.unshift()
            return
        }

        if (index === this.length - 1) {
            this.pop()
            return
        }

        let removedNode = this.get(index)

        let prevNode = removedNode.prev
        let afterNode = removedNode.next

        prevNode.next = afterNode
        afterNode.prev = prevNode

        removedNode.next = null
        removedNode.prev = null
   

        this.length--


        return this
    }
}

let list = new DoublyLinkedList()

list.push(100)
list.push(10)
list.push(5)
list.push(11)
list.push(32)
list.push(12)
list.push(1)
list.insert(1, 2)
list.remove(1)
console.log(list.get(1))