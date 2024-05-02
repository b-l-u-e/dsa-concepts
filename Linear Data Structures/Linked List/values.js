/* 

Write a function linkedListValues, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(4);
const c = new Node(6);
const d = new Node(8);
const e = new Node(14);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const linkedListValues = (head) => {
    let current = head;
    let result = [];

    while (current) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

/* 

const linkedListValues = (head) => {
    let values = [];
    fillValues(head, values);
    return values;
  
};

-> create a helper function and use it in linkedListValues function
-> recursion function
-> values mutate result array

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}


*/

const combinedLinkedListValue = (head) => {
  let values = []

  const fillValues = (currentHead) => {
    if (currentHead === null) return;
    values.push(currentHead.val);
    fillValues(currentHead.next);
  }

  fillValues(head);
  return values;
}




// console.log(linkedListValues(a));
console.log(combinedLinkedListValue(a));
