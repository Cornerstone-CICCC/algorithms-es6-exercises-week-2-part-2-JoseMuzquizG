// Includes Exercise
// Instructions: Create an array of at least five different fruits as strings. Write code to check if the array includes the fruit "apple".

const fruits = ["banana", "grape", "watermelon", "strawberry", "raisin", "cranberry", "apple"]
function appleJuice(fruits) {
    if (fruits.includes("apple")) {
        return "Let's make apple juice ☺"
    } else {
        return "There won't be any juice today"
    }
}
console.log(appleJuice(fruits))
