// const nums=[1,2,3,4,5];
// for(let i =0;i<nums.length;i++)
//     console.log(nums[i])

// nums.forEach((num,index,array)=>{
//     console.log("value is",num, "and index is",index)
// });
// Create an array of your 5 favorite fruits and print each fruit using:

// a for loop
// let fruits=["Apple","Orange",'Kiwi',"Grapes"]
// for(let i =0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// forEach()
// fruits.forEach(fruit=>console.log(fruit))

// Write a program that takes an array of numbers and prints only the even numbers.
// let numbers=[12,45,67,84,24,62,85,60];
// numbers.forEach((num)=>{
//    if(num%2==0){
//     console.log(num)
//    }
// })

// Write a program to find the index of a specific number in an array (without using indexOf).
// numbers.forEach((num,index)=>console.log("index of", num, "is",index))

// Remove the last element from an array and print the updated array in one line.
// console.log(numbers)
// let updated=numbers.pop()
// console.log(numbers)

// Write a function greetUser that takes a name and prints "Hello, <name>!".
//  let names=["Arun","Ajesh","rahul","Priya"]
// function greetUser(name){
//     console.log("Hello",name)  
// }
// function greetAll(cb){
//     names.forEach(name=>{cb(name)})
// }
// greetAll(greetUser)

// Write a function calculate that takes two numbers and a callback (for add, subtract, multiply).
// Example:

// calculate(4, 2, add)  
// should return 6
// calculate(4, 2, multiply)
  // should return 8
// let add =(x,y)=> {return x+y}
// let substract =(x,y)=> {return x-y}
// let multiply =(x,y)=> {return x*y}

// function calculate(num1,num2,cb){
//     return cb(num1,num2);
// }
// console.log(calculate(2,3, add))
// console.log(calculate(7,3, substract))
// console.log(calculate(2,3, multiply))


// Write a function that filters out all numbers greater than 10 from an array using forEach() (don’t use filter yet).
 
// let numbers=[10,45,23,1,3,6,7,78,90]
// let greaterNumber=()=>{
//     numbers.forEach((num)=>{
//         if(num>=10){
//             console.log(num)
//         }
//     })
// }

// greaterNumber();

// Write a function that takes an array of words and a callback function that converts each word to uppercase and prints it.

// let words=["a","b","c","d","e"];
// let fun1=(word)=>{  
//    console.log(word)
// }
// function fun2(cb){
//  words.forEach((word)=>{
//   cb( word.toUpperCase())
//  })
// }
// fun2(fun1);

// Write a function applyIfEven that takes a number and a callback, and only calls the callback if the number is even.

// let evenNumber=(num)=>console.log(num,"is even")
// let applyIfEven=(cb,n)=>{
//   if(n%2==0){
//     cb(n)
//   }
//   else{
//     console.log("odd")
//   }
// }
// applyIfEven(evenNumber,26)

// Callback Chaining
// Write a function processNumbers that takes an array and two callbacks:

// The first callback doubles the number.
// The second callback logs if the doubled number is greater than 10.


// function processNumbers(arr,cb1,cb2){
//     arr.forEach((item)=>{
//         let doubled= cb1(item);
//         cb2(doubled)
//     })
// }
// let double=(item)=>{
//     let value= item * 2
//   return  value
// }
//  let logIfGreaterThan10=(value)=>{
//    if(value>10){
//     console.log(value,"is greater than 10")
//    }
//    else{
//     console.log(value,"is not greater than 10");
//    }
//  }

//  processNumbers([2,4,8,5,9],double,logIfGreaterThan10)


let fruits=["apple","orange","grapes","coconut"];


let capitalize=(element,index,array)=>{
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
} 

let display=(element)=>{
  console.log(element)
}
fruits.forEach(capitalize)
fruits.forEach(display)