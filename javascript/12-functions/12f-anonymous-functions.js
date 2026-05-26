/* Caller Function */
function add(a, b, callback) {
    const sum = (a + b);

    console.log("Sum is ", sum);

    callback(sum)
}

/* Anonymous Callback Function */
add(3, 4, function (sum) {
    console.log("Addition complete, sum is", sum);
})