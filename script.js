// const products = [
//   { name: "Shoes",  price: 1200 },
//   { name: "T-shirt", price: 800 },
//   { name: "Cap",     price: 300 }
// ];
// const cart = [];

// function addToCart(product, quantity = 1) {
//   // object destructuring
//   const { name, price } = product;

//   // compute total for this line
//   const total = price * quantity;

//   // template literal for readable log
//   console.log(`Added ${quantity} x ${name} to cart (Total: ${total})`);

//   // store item for checkout
//   cart.push({ name, price, quantity, total });
//   console.log(cart)
// }
// function checkout(...item){
  
//   if(item.length===0){
//     console.log("Item is not avilable")
//     return
//   }
//  let itemCount=item.length
//   const totalBill=item.reduce((acc,item)=>{
//     const {price,quantity}=item;
//     return acc + price * quantity
//   },0)

//    console.log(`You bought ${itemCount} items. Your bill: Rs ${totalBill}`);
// }


// // Example:
// addToCart(products[0], 2); // Shoes ×2
// addToCart(products[2]);    // Cap ×1 (default quantity)
// checkout(...cart);

// function simulateAsync(value, delay, cb){
//   console.log("blah blah")
//   setTimeout(()=>{
//     cb(null,value *2)
//   },delay)
// }

// simulateAsync(3, 5000,(err, result)=>{
//   if(err) return console.log(err)
//     else return console .log(result)
// })
const students = [
  { name: "Abiya", age: 23, course: "BCA" },
  { name: "Arya", age: 22 },
  { name: "Neha", age: 24, course: "BA" }
];
const [{name: studentName, age: studentAge, course: studentCourse="unknown"},...otherStudents]=students

console.log(studentName,studentAge,studentCourse)
// console.log(otherStudents)
const otherStudentsCourse= otherStudents.map(({name,age,course ="unknown"})=>({name, age, course}))
console.log(otherStudentsCourse)