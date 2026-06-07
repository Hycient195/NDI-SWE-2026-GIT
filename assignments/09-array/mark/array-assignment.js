// QUESTION ONE

const myCart = [
    {productName: "bannaBread", price: 1500, quantity: 2},
    {productName: "honeySpread", price: 950, quantity: 1},
    {productName: "yogurt", price: 2000, quantity: 3}
];

// const myCartBill = myCart.map(priQuan => {
//     return priQuan.price * priQuan.quantity;
// });
const totalBill = myCart.reduce((acc, curr) => acc + curr.price* curr.quantity, 0);
console.log("N" + totalBill ); 

// At iteration 1 : acc = 0, curr = 3000(1500 * 2)  -> acc + curr -> 0 + 3000 -> 3000
// At iteration 2 : acc = 3000, curr = 950(950 * 1)  -> 3000 + 950 -> 3950
// At iteration 3 : acc = 3950, curr = 6000(2000 * 3)  -> 3950 + 6000 -> 9950



// QUESTION TWO
// const theNumbers = [2, 5, 7, 1, 1, 9, 5];
// const countOccurrences = (theNumber) => {
//     const result = {};

//     theNumber.forEach((value) => {
//         if (result[value]) {
//             result[value] += 1;
//         } else {
//             result[value] = 1;
//         }
//     });

//     return result;
// };

// console.log(countOccurrences(theNumbers));

const theNumbers = [2, 5, 7, 1, 1, 9, 5];
const countOccurrences = theNumbers.reduce((acc, curr) => { 
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
}, {});

console.log(countOccurrences);

// At cycle 1 : acc = 0, curr = 2 -> {2:1} 
// At cycle 2 : acc = {2:1}, curr = 5 -> {2:1, 5:1} 
// At cycle 3 : acc = {2:1, 5:1}, curr = 7 -> {2:1, 5:1, 7:1}
// At cycle 4 : acc = {2:1, 5:1, 7:1}, curr = 1 -> {2:1, 5:1, 7:1, 1:1}
// At cycle 5 : acc = {2:1, 5:1, 7:1, 1:1}, curr = 1 -> {2:1, 5:1, 7:1, 1:2}
// At cycle 6 : acc = {2:1, 5:1, 7:1, 1:2}, curr = 9 -> {2:1, 5:1, 7:1, 1:2, 9:1}
// At cycle 7 : acc = {2:1, 5:1, 7:1, 1:2, 9:1}, curr = 5 -> {2:1, 5:2, 7:1, 1:2, 9:1}


// QUESTION THREE
function isPalindrome(anyWord){
    const reversed = anyWord.split("").reverse().join("");
    return anyWord === reversed;
}

console.log(isPalindrome("Pop"));
console.log(isPalindrome("nun"));
console.log(isPalindrome("Mark"))

