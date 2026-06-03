/*
    The rest parameter allows a function to accept indefinite number of arguments,
    and allows access to those arguments within the function as an arry.

    The rest parameter syntax

    (...)

    function fnName(...restArgument) {
        // code block
    }
*/

/*
    Problem Statement:
        Write a function that accepts an indefinite number of number arguments, and
        sums all of them up, and returns the result
*/

function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr ,0)
}

const sumResult = sumNumbers(1,2,3,4,5,6)

console.log(sumResult)