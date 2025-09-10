// map   =>  create a new array by applying some logic 
//           to the exoisting array


// const fruits =["apple","orange","grapes","kiwi"]

// let display=()=>{
//     let newarray=fruits.map((element)=>{
//         return element.toUpperCase();
        
//     })
//     console.log(newarray)
// }

// display();

// const numbers=[1,2,3,4,5]
//  let display=()=>{
//    let newarr=numbers.map((num)=>{
//     return num*2;
//    })
//    console.log(newarr)
//  }
//  display()

// const fruits = ["apple", "banana", "cherry"];
// Expected: ["Fruit: apple", "Fruit: banana", "Fruit: cherry"]

// let display=()=>{
//     let prefix=fruits.map((fruit)=>{
//         return `Fruits: ${fruit}`
//     })
//     console.log(prefix)
// }
// display()

// const words = ["hi", "hello", "morning"];
// Expected: [2, 5, 7]  (length of each word)
// function display(){
//     let lengthOfWords= words.map((word)=>{
//         return word.length
//     })
//     console.log(lengthOfWords)
// }
// display()

// const users = [
//     { name: "Abiya", age: 22 },
//     { name: "Rahul", age: 25 },
//     { name: "Sara", age: 20 }
// ];
// Expected: ["Abiya", "Rahul", "Sara"]
// let display=()=>{
//    let names= users.map((user)=>{
//        return user.name 
//     })
//        console.log(names)
// }
// display()

// const products = [
//     { name: "Shirt", price: 500 },
//     { name: "Jeans", price: 1200 },
// ];
// Expected: ["Shirt costs ₹500", "Jeans costs ₹1200"]

//  let objectToString= ()=>{
//     let sentances=products.map((sent)=>{
//         return `${sent.name} costs ₹${sent.price}`
//     })
//     console.log(sentances)
//  }
// objectToString()

// let dates =["2020-01-12","2022-02-15","2024-01-01","2025-05-07"]
// let formattingDate=(element)=>{
//     const parts=element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }
// let formattedDate= dates.map(formattingDate)
// console.log(formattedDate)

// ------------------------------------Filter---------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6];
// Expected: [2, 4, 6]

// let evenNumbers=()=>{
//     let even=numbers.filter((num)=>{
//        return num%2 ===0
//     })
//     console.log(even)
// }
// evenNumbers()

// const fruits = ["apple", "banana", "avocado", "kiwi"];
// Expected: ["apple", "avocado"]

// function startwithA(element){
//     return element.startsWith("a")
// }
// let fruitsWithA=fruits.filter(startwithA)
// console.log(fruitsWithA)

// const students = [
//   { name: "John", score: 45 },
//   { name: "Jane", score: 80 },
//   { name: "Alex", score: 60 }
// ];
// Keep students with score >= 50
// Expected: [{name:"Jane",score:80}, {name:"Alex",score:60}]
// function studentDetails(element){
//     let score =element.score>=50;
//     return score;
// }
// let bestScore=students.filter(studentDetails)
// console.log(bestScore)

// const numbers = [10, 20, 30, 40, 50];
// Keep numbers only at even index positions
// Expected: [10, 30, 50]

// let evenIndex=()=>{
//     let indexEven=numbers.filter((num,index)=>{
//          return even= index%2===0
       
//     })
//     console.log(indexEven)
// }
// evenIndex()

// const users = [
//   { name: "John", age: 25, active: true },
//   { name: "Jane", age: 30, active: false },
//   { name: "Alex", age: 28, active: true }
// ];
// Keep users who are active AND age > 26
// Expected: [{name:"Alex", age:28, active:true}]

// let activeUser=()=>{
//     let blah=users.filter((user)=>{
//         return user.active==true && user.age >26
//     })
//     console.log(blah)
// }
// activeUser()

// const numbers = [10, 20, 30, 40, 50];
// Keep numbers only at even index positions
// Expected: [10, 30, 50]

// let evenIndex=()=>{
//      let number=numbers.filter((num,index)=>{
//         return index%2===0
        
//      })
//      console.log(number)
// }
// evenIndex()

// ---------------------------Reduce()--------------------------------

// const numbers = [1, 2, 3, 4];

// function multiple(value1, num){
//     return value1 * num

// }

// let result=numbers.reduce(multiple)
// console.log(result)

// const words = ["I", "love", "JS"];

// function sentance(acc,curr){
//     return acc + " " + curr
// }
// let result=words.reduce(sentance)
// console.log(result)

// const numbers = [10, 25, 3, 99, 42];
// Expected Output: 99
// 👉 Use reduce() to find the largest number in the array.

// let maxvalue=()=>{
//     let value=numbers.reduce((acc,num)=>{
//         return Math.max(acc,num)
//     })
//     console.log(value)
// }
// maxvalue()

 const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
/*
Expected Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/
// 👉 Use reduce() to build an object that counts how many times each fruit appears.

let fruitsCount=()=>{
    let count=fruits.reduce((acc,fruit)=>{
       if(acc[fruit]){
        acc[fruit]++
       }
       else{
        acc[fruit]=1
       }
       console.log("before setting accumalator",acc,"current value is ", fruit)
       return acc
    },{})
    console.log(count)
}
fruitsCount()
// const numbers = [1, 2, 3, 4];

// const result = numbers.reduce((accumulator, currentValue) => {
//   console.log("Before step → accumulator:", accumulator, "current:", currentValue);
//   return accumulator + currentValue; // add current value to accumulator
// }, ); // Initial value of accumulator = 0

// console.log("Final Result:", result);