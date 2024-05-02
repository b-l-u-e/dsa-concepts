/*
Interpolation search - improvement over binary search best used for "uniformly"
                      distributed data "guesses" where a value might be based on calculated probe results
                      if probe is incorrect, narrow the search and try again

                      average case: O(log(log(n)))
                      worse case: O(n) [values increase expontentially]

*/

function interpolationSearch(sortedArray, value) {
    let low = 0
    let high = sortedArray.length - 1

    while (low <= high && value >= sortedArray[low] && value <= sortedArray[high]) {
        let position = low + Math.floor(((high - low) / (sortedArray[high] - sortedArray[low])) * (value - sortedArray[low]))

        console.log(sortedArray[high])
        console.log(sortedArray[low])
        console.log(high)
        console.log(low)

        if (sortedArray[position] === value) {
            return position
        }

        if (sortedArray[position] < value) {
            low = position + 1
        } else {
            high = position - 1
        }
    }
    return -1

}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberToFind = 7;
console.log(interpolationSearch(array, numberToFind)); 