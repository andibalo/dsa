
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(val) {
        this.values.push(val)

        if (this.values.length === 0) {
            return
        }

        let currentIndex = this.values.length - 1

        let parentIndex = Math.floor((currentIndex - 1) / 2)

        while (this.values[parentIndex] < val) {
            this.values[currentIndex] = this.values[parentIndex]
            this.values[parentIndex] = val

            currentIndex = parentIndex

            parentIndex = Math.floor((currentIndex - 1) / 2)
        }

    }

    listValues() {
        return this.values
    }
}

let mbh = new MaxBinaryHeap()

// mbh.insert(41)
// mbh.insert(39)
// mbh.insert(33)
// mbh.insert(18)
// mbh.insert(27)
// mbh.insert(12)
mbh.insert(55)
console.log(mbh.listValues())

