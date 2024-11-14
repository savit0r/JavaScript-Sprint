
# Introduction to Data Types in JavaScript

In JavaScript (and other programming languages), there are different types of data types. The following are JavaScript primitive data types:

- **String**
- **Number**
- **Boolean**
- **Undefined**
- **Null**
- **Symbol**

## Numbers

### Integers
Whole numbers that can be negative, zero, or positive.

Example:
javascript
-3, -2, -1, 0, 1, 2, 3


### Floating-Point Numbers
Decimal numbers.

Example:
```javascript
-3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5
```

## Strings

A collection of one or more characters enclosed within single quotes, double quotes, or backticks.

Examples:
```javascript
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
```

## Booleans

A boolean value represents either `true` or `false`. Any comparison returns a boolean value.

Examples:
```javascript
true  // if the light is on
false // if the light is off
```

## Undefined

In JavaScript, if we don't assign a value to a variable, the value is `undefined`. If a function doesn’t return anything, it also returns `undefined`.

Example:
```javascript
let firstName;
console.log(firstName); // undefined
```

## Null

`Null` in JavaScript represents an empty or non-existent value.

Example:
```javascript
let emptyValue = null;
```

## Checking Data Types

To check the data type of a variable, use the `typeof` operator.

Examples:
```javascript
console.log(typeof 'Asabeneh'); // string
console.log(typeof 5);          // number
console.log(typeof true);       // boolean
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
```

## Comments

Comments make code more readable and maintainable. There are two types of comments in JavaScript:

### Single-Line Comment
```javascript
// This is a single-line comment
// let firstName = 'Asabeneh'; // single line comment
// let lastName = 'Yetayeh'; // single line comment
```

### Multi-Line Comment
```javascript
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a multi-line comment
*/
```

## Variables

Variables are containers for data. They are used to store data in memory. When a variable is declared, memory is allocated to it. When it’s assigned a value, that memory space is filled with the data.

To declare a variable, use the `let`, `const`, or `var` keywords:

- **let:** For variables that change over time.
- **const:** For variables that are constant (e.g., PI, gravity).
- **var:** Not recommended due to potential scope issues.

### Variable Naming Rules

1. Should not start with a number.
2. Allows `$` and `_` as special characters.
3. Uses camelCase for naming variables.
4. Should not contain spaces.

Examples of valid variables:
```javascript
firstName
lastName
country
city
capitalCity
age
isMarried
```

Examples of camelCase variable names:
```javascript
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
```

### Invalid Variables

Examples of invalid variable names:
```javascript
first-name
1_num
num_#_1
```

### Declaring Variables with Different Data Types

Examples:
```javascript
let firstName = 'Asabeneh'; // first name of a person
let lastName = 'Yetayeh';   // last name of a person
let country = 'Finland';    // country
let city = 'Helsinki';      // capital city
let age = 100;              // age in years
let isMarried = true;

console.log(firstName, lastName, country, city, age, isMarried); // Asabeneh Yetayeh Finland Helsinki 100 true
```

Declaring variables with number values:
```javascript
const gravity = 9.81;      // earth gravity in m/s²
const boilingPoint = 100;  // water boiling point in °C
const PI = 3.14;           // geometrical constant

console.log(gravity, boilingPoint, PI); // 9.81 100 3.14
```

Declaring multiple variables in one line:
```javascript
let name = 'Asabeneh', job = 'teacher', live = 'Finland';
console.log(name, job, live); // Asabeneh teacher Finland
```

## Day 1 Exercise

### 💻 Day 1: Exercises

1. Write a single-line comment that says, "comments can make code readable."
2. Write another single-line comment that says, "Welcome to 30DaysOfJavaScript."
3. Write a multi-line comment that says, "comments can make code readable, easy to reuse and informative."
4. Create a `variable.js` file and declare variables, assigning string, boolean, undefined, and null data types.
5. Create a `datatypes.js` file and use the JavaScript `typeof` operator to check different data types.
6. Declare four variables without assigning values.
7. Declare four variables with assigned values.
8. Declare variables to store your first name, last name, marital status, country, and age (both in multiple lines and a single line).
9. Declare two variables `myAge` and `yourAge`, assign initial values, and log to the console:
   - Example output:
     ```
     I am 25 years old.
     You are 30 years old.
     ```

---

🌕 **You are amazing!** You have just completed Day 1 of the challenge and are on your way to greatness. Keep going and build up your skills step-by-step!
```

This README.md file now includes all sections from your text with headings, code blocks, and structured formatting. Let me know if there’s anything more you’d like added!
