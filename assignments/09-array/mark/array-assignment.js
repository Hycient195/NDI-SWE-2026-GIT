// QUESTION ONE

const myCart = [
    {productName: "bannaBread", price: 1500, quantity: 2},
    {productName: "honeySpread", price: 950, quantity: 1},
    {productName: "yogurt", price: 2000, quantity: 3}
];

const myCartBill = myCart.map(priQuan => {
    return priQuan.price * priQuan.quantity;
});
const totalBill = myCartBill.reduce((acc, curr) => acc + curr, 0);
console.log(totalBill); 



