/* ================================= */
/* =========== .reduce() =========== */
/* ================================= */
/*
    This us used to exucute a user-provide function, known as reducer function, on
    each item in an array, and returns a single value as output, which is the result of the reduction of all items in the array

    // Array -> single value as output

    // Syntax

    The reduce method takes 2 arguments, first, a callback, and second an initial value
    the callback takes at least 2 argumets, the first with is the "current" value, and the seond
        which is called the "accumulator" value.

    // if no intialValue is provided, the first item in the array is used as the initial value, and the reduction operation starts from the second item in the array. If an initialValue is provided, the reduction starts from the first item in the array.

    .reduce((accumulatorValue, currentValue) => { // reduction function }, initialValue)
    
*/

/*
    Problem statement:
        Given an array of numbers, find the sum of all the numbers in the array
*/

const numbers = [1, 2, 3, 4, 5, 6];

// At cycle 1 : acc = 0, curr = 1  -> acc + curr -> 0 + 1 -> 1
// At cycle 2 : acc = 1, curr = 2  -> acc + curr -> 1 + 2 -> 3
// At cycle 3 : acc = 3, curr = 3  -> acc + curr -> 3 + 3 -> 6
// At cycle 4 : acc = 6, curr = 4  -> acc + curr -> 6 + 4 -> 10
// At cycle 5 : acc = 10, curr = 5 -> acc + curr -> 10 + 5 -> 15
// At cycle 6 : acc = 15, curr = 6 -> acc + curr -> 15 + 6 -> 21

const numbersSum = numbers.reduce(
    (acc, curr) => acc + curr,
    0
)

console.log(numbersSum)


/*
    Problem statement:
        Given an array of numbers, find the highest number in the array
*/

const nums = [2, 17, 10, 7];

// At cycle 1 : acc = 0, curr = 2; acc > curr -> 0 > 2 ? no -> return 2
// At cycle 2 : acc = 2, curr = 17; acc > curr -> 2 > 17 ? no -> return 17
// At cycle 3 : acc = 17, curr = 10; acc > curr -> 17 > 10 ? yes -> 17
// At cycle 4 : acc = 17, curr = 7; acc > current -> 17 > 7 ? yes -> 17

// At the end 17 is returned as our highest number in the array

const highestNumber = nums.reduce(
    (acc, curr) => acc > curr ? acc : curr,
    0
)

console.log("Highest number is", highestNumber);




/*
    Problem statement:
        Given an array of object consisting of users and their roles in a company,
        write a function that arranges and returns an object grouping the user names by their roles.
*/



/*
    At cycle 1 : acc = {}, curr = { name: "James", role: "analyst" }
        - check if role "analyst" does not exists in the acc object ? no -> create property "analyst"
            and assign a value of empty array [] after that push name "John" as a string value into 
            he array of proerty "analyst" and return the acc object for the next cycle
    

    At cycle 2 : acc = { 
            analyst: ["James"]
        }, curr = { name: "Alice", role: "developer" }
        - check if role "developer" does not exists in the acc object ? no -> create property "developer"
            and assign a value of empty array [] after that, push the name "Alice" as a string into the
            empty array of property "developer" and return the acc object for the next cycle


    At cycle 3 : acc = { 
            analyst: ["James"],
            developer: ["Alice"]
        }
        curr = { name: "Samuel", role: "developer" }
        - check if role "developer" does not exist in the acc object ? yes -> push the name "Samuel" as a
            string into the existing array of property "developer" and return the acc object for the next
            cycle


    At cycle 4 : acc = {
            analyst: ["James"],
            developer: ["Alice", "Samuel"],
        }
        curr = { name: "Jagun", role: "dev-ops" }
        - check if role "dev-ops" does not exist in the acc object ? no -> create a new property "dev-ops"
            and assign a value of an empty array []. After that, push the name "Jagun" as a string into it,
            and return the acc object for the next cycle
    

    At cycle 5 : acc = {
            analyst: ["James"],
            developer: "Alice", "Samuel",
            "dev-ops": "Jagun"
        }
        curr = { name: "Ireti", role: "analyst"}
        - check if role "analyst" does not exist in the acc object ? yes -> push name "Ireti" as a string
            into the existing array of property "analyst", and return the acc object for the next cycle

            
    At cycle 6: acc = {
            analyst: ["James", "Ireti"],
            developer: "Alice", "Samuel",
            "dev-ops": "Jagun",
        }
        curr = { name: "Bayo", role: "engineer" }
        - check if role "engineer" does not exist in the acc object ? no -> create a new property "engineer",
            and assign a value of an empty array []. After that, push the name "Bayo" as a string into it,
            and return the acc object for the next cycle. But at this point, there is no next cycle as this is the last

    Since no next cycle, our acc itself is now returned to the "groupByRole" variable, which is in turn,
    returned from the "groupByRole" function.
*/

const staff = [
    { name: "James", role: "analyst" },
    { name: "Alice", role: "developer" },
    { name: "Samuel", role: "developer" },
    { name: "Jagun", role: "dev-ops" },
    { name: "Ireti", role: "analyst" },
    { name: "Bayo", role: "engineer" },
]

const groupByRole = (staffArray) => {
    const groupedByRole = staffArray.reduce(
        (acc, curr) => {
            const role = curr.role;
            if (!acc[role]) {
                acc[role] = []
            }
            acc[role].push(curr.name);
            return acc
        } ,
        {}
    )
    return groupedByRole;
}

console.log(groupByRole(staff))

/*
    {
        developer: ["Alice", "Samuel"],
        analyst: ["James", "Ireti", "Kemi"],
        engineer: ["Bayo"]
    }
*/