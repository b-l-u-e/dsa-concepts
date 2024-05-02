/*

Write a function linkedListFind that takes in the head of a linked list and a target value. 
The function should return a boolean(true/false) indicating whether or not the linked list contains the target

Recursive
base case 1: if head.val equal target then return true
base case 2: if head is null then return false
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function linkedListFind(head, target) {
    // base case 1
    if (head.val === target) return true
    
    //  base case 2
    if (head === null) return false

    // recursive case
    return linkedListFind(head.next, target)
}

const node1 = new ListNode(3)
const node2 = new ListNode(8)
const node3 = new ListNode(10)

node1.next = node2
node2.next = node3

const targetValue = 8
const containsTarget = linkedListFind(node1, targetValue)

console.log(`Does the list contain ${targetValue}? ${containsTarget}`);


/*
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    add(data) {
        let newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    linkedListFind(target, current = this.head) {
        if (current === null) return false;
        if (current.data === target) return true;

        return this.linkedListFind(target, current.next);
    }
}


let myList = new LinkedList();

myList.add(3);
myList.add(8);
myList.add(15);
myList.add(10);

console.log(`Does the list contain 8? ${myList.linkedListFind(4)}`);

*/