let score = "33" //here "33" is in string format
console.log(typeof(score))

let scoreInNumber = Number(score) //by using Number string formatted "33" is converted to number formatted 33 
console.log(typeof(scoreInNumber))

//some conversion s using Number =>
    //"33" => 33        i.e string to number
    //"33qwe" => NaN    i.e string to number (NaN is also considerd as number type in js)
    //true => 1  OR false => 0       i.e  boolean to number

console.log("****************************")

    let isLoggedIn = 1
    console.log(typeof(isLoggedIn));

    let booleanIsLoggedIn = Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn)
    

    // 1 => true      number to boolean
    // 0 => false     number to boolean
    // "" => false    string to boolean
    // "Ramesh" => true  string to boolean

    console.log("*************************")


    let someNumber = 345
    console.log(someNumber)
    console.log(typeof(someNumber))

    let stringValue = String(someNumber)
    console.log(stringValue)
    console.log(typeof(stringValue))

    console.log('**************************')


    let booleanValue = true
    console.log(booleanValue)

    let booleanToString = String(booleanValue)
    console.log(booleanToString)
    console.log(typeof(booleanToString))