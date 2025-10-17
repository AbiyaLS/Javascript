let str =123
let strToString= str.toString()
let reverse = strToString.split('').reverse().join("")
if(strToString === reverse){
  console.log("palindrome")
}
else{
  console.log("Not palindrome")
}