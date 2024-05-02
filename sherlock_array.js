/*
Watson gives Sherlock an array of integers. 
His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. 
Example: arr = [5, 6, 8, 11]
8 is between two subarrays that sum to 11
arr =[1] The answer is [1] since left and right sum to 0
You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

Function description
Complete the balancedSums function in the editor below.

balancedSums has the following parameter(s): int arr[n]: an array of integers

returns: string either YES or NO

*/

function balancedSums(arr) { 
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0

    for (let i = 0; i < arr.length; i++) { 
        totalSum -= arr[i]

        if (leftSum === totalSum) {
            return "YES"
        }

        leftSum += arr[i]
    }

    return "NO"
}

console.log(balancedSums([5, 6, 8, 11])); // Outputs: YES
console.log(balancedSums([1, 1, 4, 1, 1])); // Outputs: YES
console.log(balancedSums([0,0,2,0])); // Outputs: YES
console.log(balancedSums([2, 0, 0,0])); // Outputs: YES

