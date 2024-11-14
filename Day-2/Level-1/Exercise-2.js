/*
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
*/

let challenge = "30 Days Of JavaScript";
console.log(challenge);

console.log(challenge.substring(0,3)); //substring()

console.log(challenge.substring(3,21)); //substring()

console.log(challenge.includes('Script')); //includes()

console.log(challenge.split('')) ; //split()
console.log(challenge.split());
console.log(challenge.split(' '));

