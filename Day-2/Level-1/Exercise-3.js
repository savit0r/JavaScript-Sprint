/*
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
*/

let comapanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(comapanies.split(','));

let challenge = "30 Days Of JavaScript";

console.log(challenge.replace('JavaScript', 'Python'));//replace()

console.log(challenge.charAt(15));//charAt()

console.log(challenge.charCodeAt('J')); //charCodeAt()

console.log(challenge.indexOf('a')); //indexOf()

console.log(challenge.lastIndexOf('a')); //lastIndexOf()