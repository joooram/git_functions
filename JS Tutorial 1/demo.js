console.log("Functions");

// Declaring a function
function greetName(){
    console.log("Hello, Joram");
}

greetName();

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);  // to show result
}

addTwoNumbers(30,30);  // to show result

// using LET to store the returned value from a function
let x = function(numA,numB){
    return numA + numB;
}

let result = x(20,20);
console.log(result); // to show result


const y = function(numX, numY){
    return numX + numY; 
}

let results =  y(50,50);
console.log(results); // to show result


// self invoking function\
// format of self invoking function
(function(){
    console.log("This is a self invoking function");
})();

// arrow function

// const printMyName = () => {
//     console.log("Marl Joram Mapa");
// }

// printMyName();

// const printMyMonth = () => "April";

// console.log(printMyMonth());

const addmyNumbers = (numba1, numba2, numba3) => {
    return numba1 + numba2 + numba3;
}

console.log(addmyNumbers(100,100,100));








// Declaring a function

//function printMyName() {
    //console.log("Marl Joram Mapa");
//}

//printMyName(); // calling the function


//function addNumbers(num1, num2){
    //console.log(num1 + num2);
//}

//addNumbers(10,10);

// RETURNING a value from a function
//function addNumbers(num1,num2){
//    return num1 + num2;
//}

//console.log(addNumbers(10,10));
// using LET to store the returned value from a function
//let result = addNumbers(10,10);
//console.log(result);

//const x = function(num1,num2){
    //return num1 + num2;
//}

//let result = x(10,20);

//console.log(result);