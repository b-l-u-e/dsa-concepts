// Linkedlist traversal

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2)
const b = new Node(4)
const c = new Node(6)
const d = new Node(8)

a.next = b 
b.next = c
c.next = d

// 2 -> 4 -> 6 -> 8 -> null

const printLinkedList = (head) => {
    let current = head
    while (current) {
        console.log(current.val)
        current = current.next
    }
}

/* when use recursive call

    const printLinkedList = (head) => {
        if (head === null) return;
        console.log(head.val)
        printLinkedList(head.next)
    }

*/

printLinkedList(a)