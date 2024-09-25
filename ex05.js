// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1, 3, 51, 11, 35, 6]
const pairNum = numbers.some(numbers => (numbers % 2) === 0)
if (pairNum) {
    console.log("There's at least one par number")
} else {
    console.log("There are no par numbers")
}