
const cart = [
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Headphones", price: 150, quantity: 3 }
];
 

calculateCartTotal=(cart)=> {
    let total = 0;

    cart.forEach((product) => {
        total = total + (product.price * product.quantity);
    });
    return total;
}
console.log(calculateCartTotal(cart))
