const input = Number(process.argv[2]);

const numberType = (input % 2 ===0)
                                ? "This is an even number"
                                : "This is an odd number"
    console.log(numberType)
