class PriorityQueue {
    constructor() {
        this.queue = []
    }

    isEmpty() {
        return this.queue.length === 0
    }

    // add element to the end of the queue
    enqueue(element, priority) {
        const queueElement = { element, priority }
        if (this.isEmpty()) {
            this.queue.push(queueElement)
        } else {
            let added = false

            //  iterate through the queue to find a position to insert new element
            for (let i = 0; i < this.queue.length; i++) {
                if (queueElement.priority > this.queue[i].priority) {
                    this.queue.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            // if the element has the lowest priority it is added at the end of the queue
            if (!added) {
                this.queue.push(queueElement)
            }
        }
    }


    // remove element from the front of the queue
    dequeue() {
        if (this.isEmpty())
            return "Underflow"
        return this.queue.shift()
    }

    //  check the front of the queue
    front() {
        if (this.isEmpty())
            return "No elements in the queue"
        return this.queue[0]
    }

    //  check the end of the queue
    rear() {
        if (this.isEmpty())
            return "No elements in the queue"
        return this.queue[this.queue.length - 1]
    }

    //  print elements of the queue
    printQueue() {
        let str = ""
        for (let i = 0; i < this.queue.length; i++)
            str += this.queue[i].element + " "
        return str
    }
}

let priorityQueue = new PriorityQueue()
console.log(priorityQueue.isEmpty())

priorityQueue.enqueue("John", 2)
priorityQueue.enqueue("Kelvin", 1)
priorityQueue.enqueue("Jackline", 3)


// console.log(priorityQueue.front())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.front());