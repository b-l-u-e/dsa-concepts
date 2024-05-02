/*
Consider an array of numeric strings where each string is a positive number with anywhere from 1 to 10^6 digits. 
Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

Example:
unsorted = ['1', '200', '150', '3']

Return the array ['1', '3', '150', '200']

Function Description:

bigSorting has the following parameters: string unsorted[n]

returns: string[n] - the array sorted in numerical order

Input format: 

The first line contains an integer n, the number of strings in unsorted.
Each of the n subsequent lines contains an integer string, unsorted[i]

Constraints:

1 <= n <= 2 * 10^5
Each string is guaranteed to represent a positive integer without leading zeros.
The total number of digits across all strings in unsorted is between 1 and 10^6 (inclusive)

*/

function bigSorting(unsorted) {
  unsorted.sort((a, b) => {
    if (a.length === b.length) {
      return a > b ? 1 : -1;
    }
    return a.length - b.length;
  });

  return unsorted;
}

let unsorted = [6, 31415926535897932384626433832795n, 1, 3, 10, 3, 5];

console.log(bigSorting(unsorted));



