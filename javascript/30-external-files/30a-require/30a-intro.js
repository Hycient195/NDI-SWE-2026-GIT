function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

const pi = 3.14;


module.exports = {
    pi,
    add,
    sub,
    multiply,
    division
};


module.exports.modulus = function(a, b) {
    return a % b;
}


/*
    The older approach makes use of the module.exports for exporting variables, methods, etc,
    and importing them in another file using the require() function
*/