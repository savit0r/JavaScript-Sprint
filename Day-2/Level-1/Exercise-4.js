/*
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

let challenge = 'You cannot end a sentence with because because because is a conjunction';

console.log(challenge.indexOf('because')); //indexOf()

console.log(challenge.lastIndexOf('because')); //lastIndexOf()

console.log(challenge.search('because'));//search()