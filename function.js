// function makeTea(){     its a function defination 
// we make a tea it recipes
//     console.log("Boil water");
//     console.log("add tea leaf");
//     console.log("Add sugar");
//     console.log("Here is ur Tea");
// }
// makeTea();  call the fiunction
  
// function with parameter(input)

// function greet(name){
//     console.log("hello " + name);
// }
// greet("Abiya");
// function with both parameter and argument  (output)
// function add(a,b){
// result= a+b;
// }
// add(12, 4);
// console.log(result)
//   modern style called arrow function
// const sum =(a,b)=> a+b;
// console.log(sum(2,3));

// function square(num){
//     root= num*num;
// }
// square(5);
// console.log(root)
// square(10);
// console.log(root)
// square(15);
// console.log(root)

// Make a calculator that can add, subtract, multiply, divide, and square numbers using functions.

// // 1. Add
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }


// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Error! Cannot divide by zero.";
//   }
//   return a / b;
// }

// function square(num) {
//   return num * num;
// }

// console.log("Add: " + add(5, 3));       
// console.log("Subtract: " + subtract(10, 4)); 
// console.log("Multiply: " + multiply(2, 6));  
// console.log("Divide: " + divide(15, 3));  
// console.log("Square: " + square(7));        

// create one function that decides what to do based on the operator.
 function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error! Cannot divide by zero.";
  }
  return a / b;
}

function calculator(a,b, operator){
    if(operator === "+"){
        return add(a,b);
    }
    else if(operator == "-"){
       return substract(a,b);
    }
     else if(operator == "*"){
        return multiply(a,b);
    }
     else if(operator == "/"){
       return divide(a,b);
    }
    else{
        return "Invalid Opeartor"
    }
}
console.log(calculator(2,3,"+"))
console.log(calculator(2,3,"-"))
console.log(calculator(2,3,"*"))
console.log(calculator(2,3,"/"))
