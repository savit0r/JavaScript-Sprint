let value = 45
let negValue = -value  //negation
console.log(negValue)

console.log("********** Basic Arithmatic Operations *********** ")

console.log(2+2)   //addition
console.log(2-2)   //subtraction
console.log(2*2)   //multiplication
console.log(2**2)  //power
console.log(2/2)   //division
console.log(2%2)   //modulus or remainder


console.log("************--concatanation--***********")

str1 = "hello"
str2 = " hitesh"

console.log(str1 + str2)


console.log("*************--confusing scensrios in js--*************")

console.log("1" + 2) // => 12 number ids converted to string and simply get concatinated

console.log(1 + "2") // => 12 number ids converted to string and simply get concatinated

console.log(1 + 2 + "3") // => 33 operation will take place with respective to the first operand and operator.
//  here 1+2 is first where both are number so simply get added and then concatinated to remaining 3 

console.log("1" + 2 +3) // => 123 similarly here first poerand is string so simply get concatinated with remaining numbers 


console.log("*********-- additional confusing conversions --***********")


isLogged = true
console.log(isLogged)

conversion = +true      // converted from boolean to number
console.log(conversion)

console.log(+"")  //similarly this also get converted from false boolean to a number 0

console.log("********--prefix and postfix increamental operations--*************")

let count = 200
let postfix= count++ //value is read first and then increamented
console.log(postfix) //value before increamentation
console.log(count) //value after increamentation


let gameCount = 100
let prefix = ++gameCount //value is read first and then increamented
console.log(prefix)