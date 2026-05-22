/**
 * Finds the largest of three numbers and logs it to the console.
 * 
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {number} c - Third number
 */
function findBiggestNumber(a, b, c) {
    if (a > b && a > c) {
        console.log("The largest number is:", a);
    } else if (b > a && b > c) {
        console.log("The largest number is:", b);
    } else {
        console.log("The largest number is:", c);
    }
}

// Example usage
findBiggestNumber(2, 3, 5);