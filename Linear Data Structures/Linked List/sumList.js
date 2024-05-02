/*
Write a function, sumList that takes in the head of a linked list containing numbers as an argument.
The function should return the total sum of all values in the linked list.
 */


class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new LinkedList(2);
const b = new LinkedList(4);
const c = new LinkedList(6);
const d = new LinkedList(8);
const e = new LinkedList(14);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let sumList = (head) => {
  let sum = 0;
  let current = head;

  while (current) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};


/* 
 recursive call
 let sumList = (head) => {
    if (head === null) return 0;
    return head.val + sumList(head.next);
}
*/




console.log(sumList(a));


/* 

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

function sumList(head) {
  let sum = 0;
  let current = head;

  while (current !== null) { 
    sum += current.data;
    current = current.next;
  }

  return sum
}

let myList = new LinkedList();
myList.add(3);
myList.add(8);
myList.add(3);
myList.add(1);

let totalSum = sumList(myList.head);
console.log(`Sum of numbers in the list: ${totalSum}`);


*/
