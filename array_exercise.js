
// Create an array with 3 fruits and print the first fruit.
//  let fruits =["Apple", "Orange","grapes"]
//  console.log(fruits[0])

// Add a new fruit to the end of the array and print the array.
//  fruits.push("Kiwi");
//  console.log(fruits)
// Remove the last fruit from the array and print the array.
// fruits.pop()
// console.log(fruits)
// Remove the first fruit from the array and print the array.
// fruits.shift()
// console.log(fruits)
// Add a new fruit at the beginning of the array and print the array.
// fruits.unshift("Banana")
// console.log(fruits)

// Create an array with 5 numbers. Remove the second element and print the array.
// let numbers =[1,2,3,4,5]
// console.log(numbers)
// numbers.splice(1,1)
// console.log(numbers)
// Insert two new numbers in the middle of the array and print the array.
// numbers.splice(2,0,12,23)
// console.log(numbers)
// Replace the last element with a new value and print the array.
// numbers.splice(numbers.length-1,1,56)
// console.log(numbers)
// Find the length of the array and print it.
// console.log(numbers.length)
// Get the index of a specific value in the array and print it.
// console.log(numbers)
// console.log(numbers.indexOf(23))

// Create an empty array called tasks.
    let tasks=[];
// Add 3 tasks to the array (use .push()).
  tasks.push("Wakeup 7'o clock","do exercise","Studies start on 8'o clock")
  // console.log(tasks)
// Remove the first task (use .shift()).
tasks.shift()
// console.log(tasks)
// Add a new task at the beginning (use .unshift()).
tasks.unshift("study 4 hr","sleep before 11")
// console.log(tasks)
// Replace the second task with "Do Homework".
tasks.splice(1,1,"Do Homework")
// console.log(tasks)
// Print all tasks one by one using a for loop.
for(let i=0;i<tasks.length;i++){
  // console.log(tasks[i])
}
// Print how many tasks are left using .length.
// console.log(tasks.length)


// Insert at a specific index:
// Create an array of fruits. Insert "mango" at the 2nd index using splice().
 let fruits =["Apple", "Orange","grapes","Banana"]
 fruits.splice(3,0,"Mango")
 console.log(fruits)

// Remove by value:
// Remove "banana" from the array using indexOf() + splice() (hint: find the index first, then remove it).
console.log(fruits.indexOf("Banana"));
console.log((fruits.splice(4,1),fruits))
// Check if a value exists:
// Use includes() to check if "apple" exists in the array and print true or false.
if(fruits.includes("Apple"))
  console.log("True",fruits.indexOf("Apple"))
else
  console.log("False")


// Find last occurrence:
// Create an array with some numbers repeating (e.g. [1, 2, 3, 2, 4, 2]).
// Use lastIndexOf() to find the last position of 2.
let pattern =[1, 2, 3, 2, 4, 2]
console.log(pattern.lastIndexOf(2))
// Merge arrays:
// Merge two arrays [1,2,3] and [4,5,6] using concat() and print the result.
let arr1 =[1,2,3]
let arr2 =[4,5,6]
let arr3=arr1.concat(arr2)
console.log(arr3)
// Use forEach():
// Create an array of numbers and use .forEach() to print each number multiplied by 2.