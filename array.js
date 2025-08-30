// Special container which can store many value in a single variable => Array
 
let fruits= ["apple","Banana","Cherry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length)  

// add value to the end of the array
fruits.push("Orange","mango","grapes");      
console.log(fruits);

// remove value at the end of the array
fruits.pop()
console.log(fruits)

// add value at the start of the array
fruits.unshift("Kiwi","dragon fruit");
console.log(fruits)
//  remove  values from start
fruits.shift()
console.log(fruits)
// add values at the 2nd index of the array
// variable_name.splice(startingIndex, deleteCount, item1, item2 )
fruits.splice(2,0,"Kiwi","grapes")
console.log(fruits)

// remove the element at the total length of the array -2 that mwans count thatr from the reverse position of the array from there 3 elemnt is removed
fruits.splice(fruits.length-5,3)
console.log(fruits)

let numbers=[10,20,30,40,50,60];
console.log(numbers)
 
// starting intex=2 , deleted count=3, added vales =14,56,7
numbers.splice(2,3,14,56,7)
console.log(numbers)