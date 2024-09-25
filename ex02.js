// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const numbers = [2, 3, 51, 11, 34, 6]
const greaterThanTen = numbers.find((number) => {
    return number > 10
})
console.log(greaterThanTen)