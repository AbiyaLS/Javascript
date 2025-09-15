const products = [
  { name: "Shoes",  price: 1200 },
  { name: "T-shirt", price: 800 },
  { name: "Cap",     price: 300 }
];
const cart = [];

function addToCart(product, quantity = 1) {
  // object destructuring
  const { name, price } = product;

  // compute total for this line
  const total = price * quantity;

  // template literal for readable log
  console.log(`Added ${quantity} x ${name} to cart (Total: ${total})`);

  // store item for checkout
  cart.push({ name, price, quantity, total });
  console.log(cart)
}
function checkout(...item){
  
  if(item.length===0){
    console.log("Item is not avilable")
    return
  }
 let itemCount=item.length
  const totalBill=item.reduce((acc,item)=>{
    const {price,quantity}=item;
    return acc + price * quantity
  },0)

   console.log(`You bought ${itemCount} items. Your bill: Rs ${totalBill}`);
}


// Example:
addToCart(products[0], 2); // Shoes ×2
addToCart(products[2]);    // Cap ×1 (default quantity)
checkout(...cart);


