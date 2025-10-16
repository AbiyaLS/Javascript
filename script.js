// Step 1: Array of 5 fruits
const fruits = ["apple", "banana", "orange", "mango", "grape"];

// Step 2: Object with fruit prices
const prices = {
  apple: 100,
  banana: 50,
  orange: 80,
  mango: 120,
  grape: 90
};

// Step 3: Object with fruit discounts
const discounts = {
  apple: 10,   // 10%
  banana: 5,
  orange: 8,
  mango: 15,
  grape: 7
};
let grandTotal =0
// Step 4: Find total cost after discount for each fruit
fruits.forEach(fruit => {
  const price = prices[fruit];
  const discount = discounts[fruit];
  const totalCost = price - (price * discount / 100);
  console.log(`${fruit}: ₹${totalCost}`);
  grandTotal += totalCost
});

console.log("Total Price of fruits is ",grandTotal)