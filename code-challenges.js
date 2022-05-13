// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// I have to create a function that takes a number. 
// It then will compare that number whether it is equal to, less than, or greater than 212.
// Based on how the user given number compares to 212, 
// I am expecting an output in the form on a string that corrisponds to each of the 
// 3 possible returns.


const tempReader = (tempOutput) => {
    if (tempOutput === 212) {
        return `${tempOutput} is at boiling point.`
    } else if (tempOutput < 212) {
        return `${tempOutput} is below boiling point.`
    } else {
        return `${tempOutput} is above boiling point.`
    }
}
console.log(tempReader(temp1))
console.log(tempReader(temp2))
console.log(tempReader(temp3))
console.log(tempReader(999))

//Output:
// 42 is below boiling point.
// 350 is above boiling point.
// 212 is at boiling point.
// 999 is above boiling point.

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// I will need to take two separate arrays and combine them into a third, larger array. 
// Once I have merged the two arrays, I will use a string method to give me 
// a return on the longth of the third array. 

var myNumbers3 = (myNumbers1.concat(myNumbers2))
    //  a third variable = variable1.concat(variable2)
    // .concat() is used to combine two arrays
console.log(myNumbers3.length)
    // I am requesting a console log of the length of this third variable 
    // using the string method .length  

// Output: 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

// I expected to simply use console.log(currentCohort.reverse()) to have this work, but
// upon further reading, .reverse() only works on arrays.
// What I will have to do is to create a variable that is "Charlie 2022" as strings of
// individual characters in an array. Then I will use the .reverse() function to 
// reverse the array. With the array reversed, then I will bring the individual characters
// back into a string so it will read "2202 eilrahC"

var splitCohort = currentCohort.split("")
var reverse = splitCohort.reverse()
var reverseCohort = reverse.toString()

console.log(splitCohort)
console.log(reverse)
console.log(reverseCohort)


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
