// 1)   Print numbers from 1 to 50 using a loop.

// for(let i =1; i<=50;i++){
//     console.log(i);
// }

// 2)   Print all even numbers between 1 and 100.

// for(let i=1; i<+100; i++){
//     if(i%2==0){
//         console.log("Even numbers are"+i);
//     }
// }

// 3)   Find the sum of numbers from 1 to N.
 
// let N=15;
// let sum =0;
// for(let i =1;i<=N;i++){
//     sum += i;
 
// }
// console.log("Sum of numbers for 1 to N ="+sum)

//4)   Check if a number is positive, negative, or zero.
  
// let num = 0;
// if(num >0){
//     console.log("Positive number")
// }
// else if(num<0){
//     console.log("Negative Number");
// }
// else{
//     console.log("Zero")
// }
// 5)   Take a number and print its multiplication table.
// let num =5;
// for(let i =1;i<=10;i++){
//     console.log(`${num}*${i} = ${num*i}`)
// }

//6)   Find the largest of three numbers (using if…else).

// let n1=10,n2=20,n3=30;
// if(n1>n2 && n1>n3){
//     console.log("n1 greater");
// }
// else if(n2>n1 && n2>n3){
//     console.log("n2 greater");
// }
// else{
//     console.log("n3 is greater")
// }
// 7)   Reverse an integer (e.g., 123 → 321).
 
// let num=123;
// let reversed = Number(num.toString().split("").reverse().join(""));
// console.log(reversed)

//8)   Count how many digits a number has (e.g., 12345 → 5).

// let num= 242;
// let digit =num.toString().length
// console.log(digit);

//9)    Check if a number is a prime.

// let num=12;
// let isPrime=true;

// if(num<=1){
//     isPrime=false;
// }
// else{
// for(let i=2; i<= Math.sqrt(num); i++){
//     if(num%i===0){
//      isPrime=false;
//      break;
//     }
// }
// }
// if(isPrime){
//     console.log(`${num} is a prime number`);
// }else{
//     console.log(`${num} is not a prime number`)
// }