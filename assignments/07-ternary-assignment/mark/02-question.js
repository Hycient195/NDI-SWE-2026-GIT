const score = 42;
// const score = Number(process.argv[2])
const checkScore = (score>=70)
                            ? "Excellent!"
                            :(score>=60)
                                    ? "Very Good"
                                    :(score>=50)
                                            ? "Good"
                                            :(score>=45)
                                                    ? "Pass"
                                                    :(score>=40)
                                                            ? "Fair"
                                                            : "Fail";
console.log(checkScore);

