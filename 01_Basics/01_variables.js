var accountId = 12345; //Function scoped - not a good practice to use
const userName = "Ramesh" // cannot change after defining onece
let gmailId = "ramesha@gmail.com" //block scoped - preferably used
salary = 50000 //JS is loosely typed language so without intialising variableit still allocates space in memory
let position // a simple variable can initiated without assigning any value to it by default its value will be undefined

console.table([accountId, userName, gmailId, salary, position])