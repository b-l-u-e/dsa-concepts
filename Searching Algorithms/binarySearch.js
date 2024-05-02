/**
 * Binary search algorithm is technique to find a specific value, the target element, in a sorted list or array
 * It employs divide-and-conquer strategy.
 * Repeatedly dividing the search interval in half using the binary search method until the target value is found or interval becomes empty.
 * Runtime complexity: O(logn)
 */


function binarySearch(arr, target) { 
    let first = 0
    let last = arr.length - 1

    while (first <= last) {
        let middle = Math.floor((first + last) / 2)
        

        if (arr[middle] === target) {
            return middle
        }

        if (arr[middle] > target) {
            last = middle - 1
        } else {
            first = middle + 1
        }
    }

    return -1
}

let scoreResults = [30, 60, 80, 90, 100]
console.log(binarySearch(scoreResults,80))