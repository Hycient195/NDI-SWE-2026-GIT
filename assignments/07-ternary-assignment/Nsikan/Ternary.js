const number = Number(process.argv[2]);

const message = (number % 2 === 0)
    ? "Even Number"
    : "Odd Number";

console.log(message);