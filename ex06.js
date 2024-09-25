// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [2, 3, 51, 11, 34, 6]
const positives = numbers.every(onlyPositive => onlyPositive > 0)
if (positives) {
    console.log("Every number is positive")
} else {
    console.log("Not every number is positive")
}