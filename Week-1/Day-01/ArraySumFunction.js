/**
 * Calculates the sum of all elements in an array.
 * 
 * @param {number[]} arr - The array of numbers to sum.
 * @returns {void} Logs the sum to the console.
 */
function sumArrayElements(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    console.log("The sum of elements is:", totalSum);
}

// Example usage
sumArrayElements([2, 4, 6, 8, 9]);
