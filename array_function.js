// ---------------------------Beginner----------------------------------------------------

// const nums = [1, 2, 3, 4, 5];

// let doubled=()=>{
//     let double=nums.map((num)=>{
//         return num*2
//     })
//     console.log(double)
// }
// doubled()

// const users = [
//   { first: 'John', last: 'Doe' },
//   { first: 'Jane', last: 'Smith' },
//   { first: 'Foo', last: 'Bar' }
// ];
// Task: produce an array of full names ("First Last").

// let fullNames=()=>{
//    let names=users.map((user)=>{
//     return `${user.first} ${user.last}`
//    })
//    console.log(names)
// }
// fullNames()

// const fruits = ['apple', 'Banana', 'Cherry'];
// Task: produce an array with every string converted to uppercase.

// let stringConversation=()=>{
//     let string =fruits.map((fruit)=>{
//         return fruit.toUpperCase()
//     })
//     console.log(string)
// }
// stringConversation()

// const arr = [1, 2, 3, 4, 5, 6];
// ask: keep only even numbers.

// function evenNumbers(num){
//     return num%2==0
// }
// let number=arr.filter(evenNumbers)
// // console.log(number)

// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 18 }
// ];
// Task: keep only adults (age >= 18).
// let adults=()=>{
//     let adult=people.filter((element)=>{
//         return element.age >=18
//     })
//     console.log(adult)
// }
// adults()

//  const mixed = [0, 1, '', 'Hello', null, undefined, false, '0'];
// Task: remove falsy values (keep only truthy).

// const truevalue=mixed.filter(Boolean)
// console.log(truevalue)

// const nums = [10, 20, 30];
// Task: compute the sum of all numbers.
// let sumOfNumbers=()=>{
//     let sum =nums.reduce((acc,num)=>{
//         return acc + num
//     })
//     console.log(sum)
// }
// sumOfNumbers()

// const nested = [[1, 2], [3, 4], [5]];
// Task: flatten one level into a single array.


//    let flattened= nested.reduce((acc,current)=>{
//        return acc.concat(current)
//     },[])
//     console.log(flattened)

// const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// Task: count occurrences of each item and return an object mapping item -> count.

// let occurrences = letters.reduce((acc, letter)=>{
//   if(acc[letter]){
//     acc[letter]++;
//   }
//   else{
//     acc[letter]=1
//   }
//   return acc
// },{})
// console.log(occurrences)

// ----------------------------------------Intermediate------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];
// Task: return a new array where each number is turned into a string like "Number: X".
// let arrayToString= numbers.map((num)=>{
//     return `Numbers: ${num}`
// })
// console.log(arrayToString)

// const products = [
//   { name: "Shirt", price: 100 },
//   { name: "Shoes", price: 250 },
//   { name: "Cap", price: 50 },
// ];
// Task: create a new array of product objects where 
// each product also has a new property 
// discountPrice = price * 0.9.

// let discountProducts=products.map((product)=>{
//     return {
//         ...product,     or u can use product.name,product.proce
//         discountProduct: product.price * 0.9
//     }
// })
// console.log(discountProducts)

// const words = ["hello", "world", "hi", "map", "reduce"];
// Task: filter words that have more than 3 characters.

// let filterWords= words.filter(word=> word.length>3)
// console.log(filterWords)

// const students = [
//   { name: "Alex", score: 70 },
//   { name: "Sam", score: 30 },
//   { name: "John", score: 50 },
//   { name: "Max", score: 80 },
// ];
// Task: filter students who passed (score >= 50).

// let filterStudent=students.filter(student=> student.score>=50)
// console.log(filterStudent)

// const numbers = [1, 2, 3, 4];
// Task: find the product of all numbers (multiply all together).

// let allNumberproduct= numbers.reduce((acc,num) => acc*num)
// console.log(allNumberproduct)

// const items = [
//   { name: "Book", price: 30 },
//   { name: "Pen", price: 10 },
//   { name: "Bag", price: 50 },
// ];
// Task: calculate the total price of all items.
// let totalPrice=items.reduce((acc,item)=>{
//    return acc + item.price
// },0)
// console.log(totalPrice)

// const numbers = [5, 10, 15, 20];
// Task: find the maximum number using reduce

// let maxNumber=numbers.reduce((acc,num)=>Math.max(num),0)
// console.log(maxNumber)

// ---------------------------------------Advance------------------------------------------------------

// const users = [
//   { name: "Alex", age: 17 },
//   { name: "Sam", age: 21 },
//   { name: "John", age: 25 }
// ];
// Task: return a new array containing only the names, but in uppercase.

// let uppercaseNames= users.map(user => user.name.toUpperCase())
// console.log(uppercaseNames)

// const nums = [1, 2, 3, 4, 5, 6];
// Task: filter even numbers first, then square them (method chaining).

// let evenNumbers = nums.filter(num => num%2===0)
// let squareNumbers= evenNumbers.map(element => element*element)
// console.log(squareNumbers)

// const students = [
//   { name: "Alex", score: 70 },
//   { name: "Sam", score: 30 },
//   { name: "John", score: 90 },
//   { name: "Max", score: 80 },
// ];
// Task: first filter students who scored >= 50, then use reduce() 
// to find their average score.

// let filterStudent= students.filter(student => student.score>=50)
// let averageScore= filterStudent.reduce((acc, student,_,arr)=>{
//   return  acc + student.score / arr.length
// },0)
// console.log(averageScore)

// const people = [
//   { name: "Alice", gender: "F" },
//   { name: "Bob", gender: "M" },
//   { name: "Charlie", gender: "M" },
//   { name: "Daisy", gender: "F" },
// ];
// // Task: use reduce() to group people by gender.
// let group =people.reduce((acc,peoples)=>{
//     if(!acc[peoples.gender]){
//      acc[peoples.gender]=[]
//     }
//     acc[peoples.gender].push(peoples.name)
//     return acc
// },{})
// console.log(group)

const transactions = [
  { amount: 100, type: "credit" },
  { amount: 50, type: "debit" },
  { amount: 200, type: "credit" },
  { amount: 30, type: "debit" },
];
// Filter only credit transactions

// Map to get just amounts

// Reduce to get total credit amount

let filtercredit = transactions.filter(trans => trans.type=="credit")
console.log(filtercredit)

let amount = filtercredit.map(trans => trans.amount)
console.log(amount)

let totalCreaditAmount = amount.reduce((accum,amt)=> accum + amt)
console.log(totalCreaditAmount)