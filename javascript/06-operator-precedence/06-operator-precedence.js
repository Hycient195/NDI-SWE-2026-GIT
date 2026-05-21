let a = 2;
let b = 3;
let c = 4;

/* Uses the Mathematical BODMAS Precedence Rule */
let result = (a + b) * c;
console.log(result);



/* Boolean Operator Precedence */
let d = false;
let e = true;
let f = true;
let g = false;

/* In logical precedence, brackets first, then AND (&&) and then OR (||) */

let boolResult = d || (e && f) && g;
// (e && f) is evaluated first, resulting in true
// (e && f) && g is evaluated next, resulting in false
// d || (result of previous step) is evaluated last, resulting in false
console.log(boolResult);

let bool2Result = (d || !(e && f)) && g;
console.log(bool2Result);

/* Associativity in Action */
/* In associative action of same operator, we move from left to right */
let result1 = 10 - 5 - 2;
console.log(result1)

/* Assignment Precedence */
/* In assignment precedence we move from the right to the left */
let h = 3;
let i = 4;
let j = i = h;
console.log(j)

let k = 5;
let l = 7;
let m = 2;

let result2 = k > l <= m;
// Type Coercion converts k > l to false, and coerces false to boolean, which is 0 and then 0 is compared to m, resulting in true
console.log(result2)