
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
