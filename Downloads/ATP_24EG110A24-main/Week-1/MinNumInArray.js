/**
 * Finds the minimum number in an array.
 */
const numbers = [10, 30, 4, 5];
let minVal = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (minVal > numbers[i]) {
        minVal = numbers[i];
    }
}

console.log("The minimum value in the array is:", minVal);