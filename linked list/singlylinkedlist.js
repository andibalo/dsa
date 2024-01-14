// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;

            this.length += 1
            return this
        }

        let newNode = new Node(val)

        this.tail.next = newNode
        this.tail = newNode

        this.length += 1
        return this
    }

    pop() {
        if (this.length === 0) {
            return undefined
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return
        }

        let current = this.head
        let prevNode = current

        while (current.next) {
            prevNode = current
            current = current.next
        }

        this.tail = prevNode
        prevNode.next = null


        this.length--
    }

    shift() {
        if (this.length === 0) {
            return undefined
        }

        let removedHead = this.head

        this.head = removedHead.next

        this.length--

        return removedHead.val
    }

    unshift(val) {
        let oldHead = this.head

        if (this.length === 0) {
            this.head = new Node(val)
            this.tail = this.head
            return
        }

        this.head = new Node(val)
        this.head.next = oldHead

        this.length++

        return this
    }

    get(index) {

        if (index < 0 || index >= this.length) {
            return null
        }

        let currentHead = this.head
        let count = 0

        while (count !== index) {
            currentHead = currentHead.next

            count++
        }

        return currentHead
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("WORLD")

