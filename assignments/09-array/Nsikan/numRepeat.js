

// what happens at each iteration
    // Iteration 1
    // item = 1
    // filler[1] is undefined
    // set filler[1] = 1
    // filler = { 1: 1 }

    // Iteration 2
    // item = 2
    // filler[2] is undefined
    // set filler[2] = 1
    // filler = { 1: 1, 2: 1 }

    // Iteration 3
    // item = 1
    // filler[1] exists and equals 1
    // increment filler[1]
    // filler = { 1: 2, 2: 1 }

    // Iteration 4
    // item = 3
    // filler[3] is undefined
    // set filler[3] = 1
    // filler = { 1: 2, 2: 1, 3: 1 }

    // Iteration 5
    // item = 4
    // filler[4] is undefined
    // set filler[4] = 1
    // filler = { 1: 2, 2: 1, 3: 1, 4: 1 }

    // Iteration 6
    // item = 52
    // filler[52] is undefined
    // set filler[52] = 1
    // filler = { 1: 2, 2: 1, 3: 1, 4: 1, 52: 1 }

    // Iteration 7
    // item = 3
    // filler[3] exists and equals 1
    // increment filler[3]
    // filler = { 1: 2, 2: 1, 3: 2, 4: 1, 52: 1 }

    // Iteration 8
    // item = 6
    // filler[6] is undefined
    // set filler[6] = 1

    // Iteration 9
    // item = 7
    // filler[7] is undefined
    // set filler[7] = 1

    // Iteration 10
    // item = 8
    // filler[8] is undefined
    // set filler[8] = 1


let arrayOfNum= [1,2,1,3,4,52,3,6,7,8]

function arraySort(toHouseArray){
    const filler= {}
for(let item of toHouseArray)
    if (filler[item]) {
        (filler[item])++
    } else
        { (filler[item])= 1}

        return filler 
}


let result = arraySort(arrayOfNum)
    for(let number in result){
         console.log(`number:, ${number}, occurence:, ${result[number]} `)}
