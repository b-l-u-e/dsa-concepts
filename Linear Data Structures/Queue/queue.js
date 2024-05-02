class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }

    // check if the queue is empty
    isEmpty() {
        return this.length === 0;
    }

    //  enqueue or add element at the end of the queue
    enqueue(element) {
        this.elements[this.tail] = element
        this.tail++;
    }

    //  dequeue or remove element from the front of the queue
    dequeue() {
        if (this.isEmpty())
            return "Underflow"
        const item = this.elements[this.head]
        this.head++
        return item
        
    }

    //  peek the front element from the queue
    peek() {
        return this.elements[this.head]
    }

    // get the length of the queue
    get length() {
        return this.tail - this.head
    }
}


let queue = new Queue()
console.log(queue.isEmpty())
console.log(queue.dequeue())

//  enqueue some elements
queue.enqueue("John")
queue.enqueue("Kelvin")
queue.enqueue("Jackline")
queue.enqueue("Mary")

console.log(queue.length)

console.log(queue.dequeue())

console.log(queue.peek())