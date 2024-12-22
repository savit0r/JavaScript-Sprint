//primitive 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue =100.789
const outsideTemp = null
let emailID


const id = Symbol('123')
const anotherId = Symbol('123') //used make data inside variable unique
console.log(id === anotherId)

//JS is dynamically type language
//no need to specify the type of variable while declaring it is recognised automatically


//Refrence(Non primitive):
//Array, Objects, Function

const myArr =["Red", "black", "Orange", "green"]

let myObj ={
    userName : "Jitesh",
    userId : 232,
    age : 23
}

console.log(myArr)
console.log(myObj)


const myFunction = function(){
    console.log("Hello world !")
}

console.log(typeof(myArr)) // =>object i.e because of every non primitive datatype is object.
console.log(typeof(myFunction))// => function function is fnction type only or object function to be more presise