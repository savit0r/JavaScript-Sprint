Introduction to Data types
In JavaScript and also other programming languages, there are different types of data types. The following are JavaScript primitive data types: String, Number, Boolean, undefined, Null, and Symbol.

Numbers
Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...
Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
Strings
A collection of one or more characters between two single quotes, double quotes, or backticks.

Example:

'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
Booleans
A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

A boolean data type is either a true or false value.

Example:

true // if the light is on, the value is true
false // if the light is off, the value is false
Undefined
In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
Null
Null in JavaScript means an empty value.

let emptyValue = null
Checking Data Types
To check the data type of a certain variable, we use the typeof operator. See the following example.

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
Comments Again
Remember that commenting in JavaScript is similar to other programming languages. Comments are important in making your code more readable. There are two ways of commenting:

Single line commenting
Multiline commenting
// commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment
Multiline commenting:

/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/
Variables
Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

A valid JavaScript variable name must follow the following rules:

A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words.
The following are examples of valid JavaScript variables.

firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In this material, we will use camelCase variables(camelWithOneHump). We use CamelCase(CamelWithTwoHump) to declare classes, we will discuss about classes and objects in other section.

Example of invalid variables:

  first-name
  1_num
  num_#_1
Let us declare variables with different data types. To declare a variable, we need to use let or const keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value(assigned data).

// Syntax
let nameOfVariable = value
The nameOfVriable is the name that stores different data of value. See below for detail examples.

Examples of declared variables

// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
Asabeneh Yetayeh Finland Helsinki 100 true
// Declaring variables with number values
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)
9.81 100 3.14
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
Asabeneh teacher Finland
When you run index.html file in the 01-Day folder you should get this:

Day one

🌕 You are amazing! You have just completed day 1 challenge and you are on your way to greatness. Now do some exercises for your brain and muscle.

💻 Day 1: Exercises
Write a single line comment which says, comments can make code readable

Write another single comment which says, Welcome to 30DaysOfJavaScript

Write a multiline comment which says, comments can make code readable, easy to reuse and informative

Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

Declare four variables without assigning values

Declare four variables with assigned values

Declare variables to store your first name, last name, marital status, country and age in multiple lines

Declare variables to store your first name, last name, marital status, country and age in a single line

Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

I am 25 years old.
You are 30 years old.
