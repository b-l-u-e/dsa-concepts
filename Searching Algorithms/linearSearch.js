/*
Linear search or sequential search
1: Linear search is a simple search algorithm that finds the position of a target value within a collection
2: Linear search iterates through collection one element at a time
3: Runtime complexity: O(n)
4: Disadvantage: slow for large data sets
5: Advantages:
  - Fast for searches of small to medium data sets
  - Does not need to be sorted
  - Useful for data structures that do not have random access (Linked List)


*/

function linearSearch(arr, target) { 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
        return "Element found at index: " + i;
        }
    }
    return -1;

}

const array = [9, 1, 8, 2, 7, 3, 4, 5, 6]

console.log(linearSearch(array, 7)) // 4
