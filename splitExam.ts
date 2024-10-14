/*
    input = 'helloWorld'
    output = ['hello', 'World']
*/

function splitByUpperCase(input:string):(string | undefined)[] {
    let upperCaseArr = []
    let res = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) upperCaseArr.push(input[i])
    }

    res = input.split(/[A-Z]/g)

    for (let i = 0; i < res.length; i++) {
        if (i === 0) continue
        res[i] = upperCaseArr[i-1] + res[i]
    }

    return res
}

console.log(splitByUpperCase('johnDoeMiller'))