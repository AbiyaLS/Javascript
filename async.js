// const pizzaOrder = new Promise((resolve,reject)=>{
//     console.log("You placed a order for pizza ....")

//     setTimeout(()=>{
// const success= true
//         if(success)  console.log("PIzza arrived successfully")
//             else console.log("Pizza burned sorry for the in convientance")
//     },500)
// })

// pizzaOrder
// .then(message =>{
//     console.log("Success",message)
// })
// .catch(err=>{
//     console.log("Error occurs",err)
// })


// const task =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(5)
//     },1000)
// })

// task
// .then(num =>{
//     console.log(num)
//     return num *2
// })
// .then(num =>{
//     console.log(num)
//     return num + 10
// })
// .then(num =>{
//     console.log(num)
//     return num - 3
// })
// .then(num =>{
//     console.log(num)
// })

// const task =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Task succeeded")
//         reject("Task Rejected")
//     },1000)
// })

// task
// .then(message =>{
//     console.log("Sucess",message)
// })
// .catch(err =>{
//     console.log("Rejected", err)
// })

// const delayMessage = new Promise((resolve,reject)=>{
//     resolve("hello world")
// },1000)
// delayMessage.then(msg => console.log(msg))

// const sucessFailure = new Promise((resolve,reject)=>{
//     const success = true;
//     if(Math.random()>0.5) resolve("Sucess")
//         else reject("Failed")
// })
// sucessFailure
// .then(msg => console.log("SucessFully", msg))
// .catch(err =>console.log("Error occur", err))

// const fetchUser =new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve({ id: 1, name: "Abiya" })
//   },1000)
// })
// fetchUser
// .then(user =>{
//     console.log("User:",user.name)
// })
// .catch(err=>console.log("Error occur", err))

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function example() {
//   console.log("Before wait");
//   await delay(1000); // wait for 1 sec
//   console.log("After wait");
// }

// example();

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }
// let task = async()=>{
//     await delay(2000)
//    console.log("Task Completed")
// }
// task()

function doubleAfter1Sec(num){
    return new Promise(resolve =>{setTimeout(()=>{resolve(num*2)},1000)})
}
async function process(){
    console.log("Start")

const number = await doubleAfter1Sec(5);
console.log(number)
}

process()