// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: Output: 5. <.push()> is a mutator meaning it permanently changes an array. The output was a reading of the array's new index. If I wanted it to return an array adding "indigo" as a fifth element, I would have to run <console.log(colors)>.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: I was correct. Index starts at 0, but <.length> counts each character in a string beginning with 1. "LEARN" is 5 characters, a space is 1, and "2022" is 4 characters.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "l"
// b) Verify and explain: Output: "o". I just explained how index and <.length> count differently, but I miscounted the index in the string. I started counting "H" as 1 instead of 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Output: "Ruby"
// b) Verify and explain: I was correct. When you request the index of an array it returns the element that is at the index location. In this case, "JavaScript" is at the 0 index and "Ruby" is at 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: I got an error code. <.toUpperCase()> is a built-in method that works on strings, not arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Output: some error code.
// b) Verify and explain: I was not familiar with the operator <typeof> and I assumed it would think it was gibberish. <typeof> will give a return that says the type of the function it is prefixed to. In this case, <.length> will return a number, so the output was "number".