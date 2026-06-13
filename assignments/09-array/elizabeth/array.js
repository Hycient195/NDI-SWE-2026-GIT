/*question 1 */
  
// const userCart = { itemName: string, price: number, quantity: number}

/* cycle 1 acc= 0 
  first item bag: we have  35000 * 1 = 35000 ->(0 + 35000)
  35000 becomes our accumulator for the next cycle 

  cycle 2 acc =35000
  second item chocolate : we have 5000 * 2 = 10000 ->(10000 + 35000)
  45000 becomes our acc for the next cycle.

  cycle 3 acc = 45000
  third item bread :we have 2000 * 4 = 8000 ->(8000 + 45000)
  53000 becomes our final result

 */

const userCart = [
    {itemName: "bag", price: 35000, quantity: 1},
    {itemName: "chocolates", price: 5000, quantity: 2},
    {itemName: "bread", price: 2000, quantity: 4}
]
 
const userTotal = userCart.reduce(
    (acc, curr) => acc + (curr.price * curr.quantity),
     0 //initial acc
 )

console.log(userTotal);

/*output 
bag: 3500x1=35000
chocolates: 5000x2=10000
bread: 2000x4=8000
userTotal=53000
*/ 


/*question 2 */
input: [3,5,6,7,3,4,8,3,4]
//output: {number:3, occurrence: 3, number: 5, occurrence: 1, number: 6, occurrence:1,
//  number:7, occurrence: 1, number:4, occurrence:2, number:8, occurrence: 1}

// Iteration cycle.
/* cycle 1 : the first number is 3, does it exist ? no (else)then push with initial count of 1 (now 3 has occuurence of 1) 

  cycle 2:  the second number is 5, does it exist ? no then push with initial count of 1 (now 5 has occuurence of 1)

  cycle 3:  the third number is 6, does it exist ? no then push with initial count of 1 (now 6 has occuurence of 1) 

  cycle 4:  the forth number is 7, does it exist ? no then push with initial count of 1 (now 7 has occuurence of 1)

  cycle 5:  the fifth number is 3, does it exist ? yes then increase its occurence(++) by 1 (now 3 has accu/occurrence  of 2)

  cycle 6:  the sixth number is 4, does it exist ? no then push with initial count of 1 (now 4 has occuurence of 1)

  cycle 7:  the seventh number is 8, does it exist ? no then push with initial count of 1 (now 8 has occuurence of 1)

  cycle 8:  the eighth number is 3, does it exist ? yes then increase its occurence(++) by 1 (now 3 has accu/occurrence  of 3)

  cycle 9:  the ninth number is 4, does it exist ? yes then increase its occurence(++) by 1 (now 4 has accu/occurrence  of 2)


*/

const input = [3, 5, 6, 7, 3, 4, 8, 3, 4];


const countOccurrence = (input) =>{
    const count = input.reduce((acc, curr)=>{

        //  check if the number is already in accumulator array
      const existing = acc.find(input => input.number === curr);
    if (existing) {
        // if existing, increase its count
        existing.occurrence++;
        }
        else{
            // if its new, push with an initial count of 1
          acc.push({number: curr, occurrence: 1});
        }
      return acc;}, 
     
     []);
     return count;
    };
        
console.log(countOccurrence(input))
        
       


// Declearing a function name.
function reversible(word) {
// this creates the reversed version of the input
    const reverseword = word.split('').reverse().join('');

// check if the original word matches the reversed word, if yes return true.
return word === reverseword;

}


// calls the function with the input.
console.log(reversible("rever"));